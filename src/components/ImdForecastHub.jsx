import React from 'react';
import { CloudRain, ExternalLink, ShieldAlert, AlertOctagon, Info, ArrowUpRight, Radio } from 'lucide-react';

export default function ImdForecastHub() {
  const officialSources = [
    {
      agency: "India Meteorological Department (IMD)",
      url: "https://mausam.imd.gov.in",
      role: "Official All-India Weather Warnings, Heavy Rainfall & Cyclone Tracking",
      type: "Primary Forecast Agency"
    },
    {
      agency: "Central Water Commission (CWC)",
      url: "https://ffs.gdm.cwc.gov.in",
      role: "Real-time River Water Level & Inundation Flood Forecasting",
      type: "Hydrological Monitoring"
    },
    {
      agency: "National Disaster Management Authority (NDMA)",
      url: "https://ndma.gov.in",
      role: "National Disaster Bulletins, Advisory Guidelines & Mitigation Orders",
      type: "Apex Management Agency"
    },
    {
      agency: "Indian National Centre for Ocean Information Services (INCOIS)",
      url: "https://incois.gov.in",
      role: "Tsunami Early Warning, High Wave Advisories & Coastal Storm Surge",
      type: "Oceanographic Warning"
    }
  ];

  const alertLevelCodes = [
    { code: "RED ALERT (Take Action)", color: "red", desc: "Extremely severe weather imminent or occurring. Evacuate low-lying areas if directed by district authorities." },
    { code: "ORANGE ALERT (Be Prepared)", color: "orange", desc: "Severe weather likely. Prepare emergency kits, keep battery radio handy, restrict unnecessary travel." },
    { code: "YELLOW WATCH (Be Aware)", color: "yellow", desc: "Weather conditions changing. Monitor local IMD updates and river levels." },
    { code: "GREEN (No Warning)", color: "green", desc: "No adverse weather warning. Normal preparedness recommended." }
  ];

  return (
    <div className="imd-hub-container">
      {/* Refusal Policy Banner */}
      <div className="refusal-policy-card">
        <div className="policy-header">
          <AlertOctagon size={24} className="text-red" />
          <div>
            <h2>MANDATORY RULE 1: NO AI DISASTER PREDICTION</h2>
            <span className="policy-sub">Strict Safety Constraint per System Prompt & NDMA Standards</span>
          </div>
        </div>
        <p className="policy-text">
          "I can't predict disasters — that's outside what documented guidance can responsibly tell you. For live forecasts and warnings, check IMD (mausam.imd.gov.in) or your State Disaster Management Authority."
        </p>
        <div className="policy-reason">
          <Info size={16} />
          <span>
            <strong>Why AI does not predict:</strong> Unverified predictions can cause public panic or false complacency. Only official government meteorological agencies (IMD, CWC, INCOIS) are legally authorized to issue disaster warnings.
          </span>
        </div>
      </div>

      {/* Official Links Grid */}
      <h3 className="section-title"><CloudRain size={18} /> Official Government Warning Portals</h3>
      <div className="official-links-grid">
        {officialSources.map((src, index) => (
          <div key={index} className="source-card">
            <div className="source-top">
              <span className="source-type">{src.type}</span>
              <a href={src.url} target="_blank" rel="noreferrer" className="external-link-btn">
                Visit Official Portal <ArrowUpRight size={14} />
              </a>
            </div>
            <h4>{src.agency}</h4>
            <p>{src.role}</p>
            <div className="domain-url">{src.url}</div>
          </div>
        ))}
      </div>

      {/* IMD Warning Color Codes Explanation */}
      <h3 className="section-title"><Radio size={18} /> IMD Weather Warning Color Code Guide</h3>
      <div className="color-codes-grid">
        {alertLevelCodes.map((alert, idx) => (
          <div key={idx} className={`color-card ${alert.color}`}>
            <div className="color-header">
              <span className={`color-dot ${alert.color}`}></span>
              <h4>{alert.code}</h4>
            </div>
            <p>{alert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
