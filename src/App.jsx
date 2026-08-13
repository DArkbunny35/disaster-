import React, { useState } from 'react';
import Header from './components/Header';
import AdvisorChat from './components/AdvisorChat';
import EmergencyContactsMatrix from './components/EmergencyContactsMatrix';
import PreparednessVault from './components/PreparednessVault';
import ImdForecastHub from './components/ImdForecastHub';
import SystemPromptInspector from './components/SystemPromptInspector';
import { ShieldAlert, PhoneCall, X, AlertTriangle, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('advisor');
  const [emergencyMode, setEmergencyMode] = useState(false);

  return (
    <div className={`app-root ${emergencyMode ? 'emergency-active' : ''}`}>
      {/* Emergency Global Alert Overlay */}
      {emergencyMode && (
        <div className="emergency-banner-alert">
          <div className="alert-pulse-flasher">
            <ShieldAlert size={22} />
            <span>ACTIVE EMERGENCY MODE TRIGGERED (RULE 0 INTERCEPTION)</span>
          </div>
          <div className="alert-actions">
            <a href="tel:112" className="alert-call-btn">
              <PhoneCall size={14} /> CALL 112 NOW
            </a>
            <button className="dismiss-alert-btn" onClick={() => setEmergencyMode(false)}>
              <X size={16} /> Dismiss Alert
            </button>
          </div>
        </div>
      )}

      {/* Main App Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        emergencyMode={emergencyMode}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'advisor' && (
          <AdvisorChat onTriggerEmergency={() => setEmergencyMode(true)} />
        )}
        {activeTab === 'contacts' && <EmergencyContactsMatrix />}
        {activeTab === 'vault' && <PreparednessVault />}
        {activeTab === 'imd' && <ImdForecastHub />}
        {activeTab === 'prompt' && <SystemPromptInspector />}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-left">
            <ShieldAlert size={20} className="footer-icon" />
            <div>
              <p className="footer-title">Disaster Preparedness Advisor • India</p>
              <p className="footer-sub">
                Built strictly on NDMA (National Disaster Management Authority), State Disaster Management Plans, and IMD Advisory Guidelines.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://ndma.gov.in" target="_blank" rel="noreferrer">
              NDMA Portal <ExternalLink size={12} />
            </a>
            <a href="https://mausam.imd.gov.in" target="_blank" rel="noreferrer">
              IMD Live <ExternalLink size={12} />
            </a>
            <button onClick={() => setActiveTab('prompt')} className="footer-btn-link">
              View System Prompt Logic
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
