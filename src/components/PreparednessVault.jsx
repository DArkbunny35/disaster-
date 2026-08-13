import React, { useState } from 'react';
import { DISASTER_GUIDELINES } from '../data/ndmaGuidance';
import { CheckSquare, Building, Trees, Printer, ShieldCheck, AlertCircle, Info, Download } from 'lucide-react';

export default function PreparednessVault() {
  const [selectedDisaster, setSelectedDisaster] = useState('flood');
  const [contextMode, setContextMode] = useState('urban'); // 'urban' or 'rural'
  const [phaseFilter, setPhaseFilter] = useState('all'); // 'all', 'before', 'during', 'after'

  const guidelines = DISASTER_GUIDELINES[selectedDisaster] || DISASTER_GUIDELINES.flood;
  const contextData = contextMode === 'rural' ? guidelines.ruralContext : guidelines.urbanContext;

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="vault-container">
      {/* Vault Header */}
      <div className="vault-header-banner">
        <div>
          <h2><CheckSquare className="inline-icon" /> NDMA Official Preparedness Vault</h2>
          <p>Documented Do's and Don'ts sourced directly from National Disaster Management Authority (NDMA) & State Guidelines.</p>
        </div>

        <button className="print-btn" onClick={handlePrintCard}>
          <Printer size={16} />
          <span>Print Emergency Action Card</span>
        </button>
      </div>

      {/* Selector Controls */}
      <div className="vault-controls">
        {/* Disaster Type Selector */}
        <div className="control-group">
          <span className="control-label">Select Disaster Type:</span>
          <div className="pill-group">
            {Object.keys(DISASTER_GUIDELINES).map((key) => (
              <button
                key={key}
                className={`type-pill ${selectedDisaster === key ? 'active' : ''}`}
                onClick={() => setSelectedDisaster(key)}
              >
                {DISASTER_GUIDELINES[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Urban vs Rural Switcher */}
        <div className="control-group">
          <span className="control-label">Infrastructure Context:</span>
          <div className="pill-group">
            <button
              className={`context-pill ${contextMode === 'urban' ? 'active' : ''}`}
              onClick={() => setContextMode('urban')}
            >
              <Building size={14} /> Urban / Municipal Infrastructure
            </button>
            <button
              className={`context-pill ${contextMode === 'rural' ? 'active' : ''}`}
              onClick={() => setContextMode('rural')}
            >
              <Trees size={14} /> Rural / Village Context
            </button>
          </div>
        </div>

        {/* Phase Selector */}
        <div className="control-group">
          <span className="control-label">Disaster Phase:</span>
          <div className="pill-group">
            {['all', 'before', 'during', 'after'].map((p) => (
              <button
                key={p}
                className={`phase-pill ${phaseFilter === p ? 'active' : ''}`}
                onClick={() => setPhaseFilter(p)}
              >
                {p === 'all' ? 'FULL CHECKLIST' : p.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rural Bias Check Alert Box */}
      {contextMode === 'rural' && contextData.limitedGuidanceNotice && (
        <div className="bias-warning-box">
          <AlertCircle size={20} className="icon-warning" />
          <div>
            <strong>Rule 2 & Bias Check Notice (Rural Context):</strong>
            <p>{contextData.limitedGuidanceNotice}</p>
          </div>
        </div>
      )}

      {/* Main Printable Action Card */}
      <div className="printable-action-card">
        <div className="card-header">
          <div className="card-brand">
            <ShieldCheck size={24} />
            <div>
              <h3>NDMA ACTION CARD: {guidelines.title.toUpperCase()}</h3>
              <span className="card-source">{guidelines.source}</span>
            </div>
          </div>
          <span className="context-badge">{contextMode.toUpperCase()} EDITION</span>
        </div>

        {/* Immediate Survival Bullets */}
        <div className="card-emergency-section">
          <h4><AlertCircle size={16} /> Immediate Critical Bullets (Imperative Steps):</h4>
          <ul>
            {guidelines.emergencyBullets.map((bullet, idx) => (
              <li key={idx}><strong>Step {idx + 1}:</strong> {bullet}</li>
            ))}
          </ul>
        </div>

        {/* Phase Sections */}
        <div className="checklist-sections">
          {(phaseFilter === 'all' || phaseFilter === 'before') && (
            <div className="phase-block before">
              <h4>Phase 1: BEFORE DISASTER (Preparation & Kit)</h4>
              <div className="checklist-items">
                {contextData.before.map((item, idx) => (
                  <label key={idx} className="check-item">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {(phaseFilter === 'all' || phaseFilter === 'during') && (
            <div className="phase-block during">
              <h4>Phase 2: DURING DISASTER (Survival Actions)</h4>
              <div className="checklist-items">
                {contextData.during.map((item, idx) => (
                  <label key={idx} className="check-item">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {(phaseFilter === 'all' || phaseFilter === 'after') && (
            <div className="phase-block after">
              <h4>Phase 3: AFTER DISASTER (Recovery & Hazard Mitigation)</h4>
              <div className="checklist-items">
                {contextData.after.map((item, idx) => (
                  <label key={idx} className="check-item">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="card-footer-note">
          <span>Official Helpline: Call 112 (All-India) or NDMA 011-1078 • Printed from Disaster Preparedness Advisor</span>
        </div>
      </div>
    </div>
  );
}
