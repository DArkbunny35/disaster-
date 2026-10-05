import React from 'react';
import { ShieldAlert, PhoneCall, Radio, FileText, CheckSquare, CloudRain, Code2, Landmark } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, emergencyMode }) {
  return (
    <header className={`app-header ${emergencyMode ? 'header-emergency' : ''}`}>
      <div className="header-top-banner">
        <div className="banner-content">
          <span className="badge-official">OFFICIAL NDMA / SDMA / IMD GUIDELINE COMPLIANT</span>
          <span className="banner-text">National Emergency Response Support System — India</span>
        </div>
        <div className="header-hotline">
          <a href="tel:112" className="hotline-btn">
            <PhoneCall size={14} />
            <span>ALL-INDIA EMERGENCY: <strong>112</strong></span>
          </a>
        </div>
      </div>

      <div className="header-main">
        <div className="brand-logo" onClick={() => setActiveTab('advisor')}>
          <div className="shield-icon-wrapper">
            <ShieldAlert size={28} />
          </div>
          <div className="brand-text">
            <h1>Disaster Preparedness Advisor</h1>
            <span className="sub-title">NDMA & State Advisory System • India</span>
          </div>
        </div>

        <nav className="header-nav">
          <button
            className={`nav-btn ${activeTab === 'advisor' ? 'active' : ''}`}
            onClick={() => setActiveTab('advisor')}
          >
            <Radio size={16} />
            <span>AI Advisor & Emergency Engine</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'relief' ? 'active' : ''}`}
            onClick={() => setActiveTab('relief')}
          >
            <Landmark size={16} />
            <span>Govt Disaster Relief</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            <PhoneCall size={16} />
            <span>Emergency Contacts Matrix</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'vault' ? 'active' : ''}`}
            onClick={() => setActiveTab('vault')}
          >
            <CheckSquare size={16} />
            <span>NDMA Preparedness Vault</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'imd' ? 'active' : ''}`}
            onClick={() => setActiveTab('imd')}
          >
            <CloudRain size={16} />
            <span>IMD Forecast & Alerts Hub</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'prompt' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompt')}
          >
            <Code2 size={16} />
            <span>Prompt Rules Inspector</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
