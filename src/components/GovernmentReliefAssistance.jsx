import React, { useState } from 'react';
import {
  INDIAN_STATES_LIST,
  DISASTER_TYPES,
  PROPERTY_TYPES,
  DAMAGE_LEVELS,
  AREA_TYPES,
  calculateAssistance,
  SUPPORT_CATEGORIES,
  CLAIM_STEPS,
  OFFICIAL_SOURCES
} from '../data/disasterReliefData';
import {
  Landmark,
  Calculator,
  AlertTriangle,
  Info,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Home,
  Utensils,
  Tent,
  Droplets,
  Hospital,
  HeartHandshake,
  Sprout,
  LifeBuoy,
  FileText,
  Building,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function GovernmentReliefAssistance({ onNavigateToContacts }) {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedDisaster, setSelectedDisaster] = useState('Flood');
  const [selectedProperty, setSelectedProperty] = useState('Pucca house');
  const [selectedDamage, setSelectedDamage] = useState('Completely destroyed');
  const [selectedArea, setSelectedArea] = useState('Plain area');
  const [result, setResult] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const isFormComplete =
    selectedState &&
    selectedDisaster &&
    selectedProperty &&
    selectedDamage &&
    selectedArea;

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!isFormComplete) return;

    const calculation = calculateAssistance({
      state: selectedState,
      disasterType: selectedDisaster,
      propertyType: selectedProperty,
      damageLevel: selectedDamage,
      areaType: selectedArea
    });

    setResult(calculation);
    setIsCalculated(true);
  };

  const renderSupportIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home size={22} className="support-card-icon" />;
      case 'Utensils': return <Utensils size={22} className="support-card-icon" />;
      case 'Tent': return <Tent size={22} className="support-card-icon" />;
      case 'Droplets': return <Droplets size={22} className="support-card-icon" />;
      case 'Hospital': return <Hospital size={22} className="support-card-icon" />;
      case 'HeartHandshake': return <HeartHandshake size={22} className="support-card-icon" />;
      case 'Sprout': return <Sprout size={22} className="support-card-icon" />;
      case 'LifeBuoy': return <LifeBuoy size={22} className="support-card-icon" />;
      default: return <ShieldCheck size={22} className="support-card-icon" />;
    }
  };

  return (
    <div className="relief-assistance-container">
      {/* Top Banner & Header */}
      <div className="relief-header-card">
        <div className="relief-header-top">
          <div className="relief-badge">
            <Landmark size={15} />
            <span>STATUTORY DISASTER RELIEF • SDRF / NDRF NORMS</span>
          </div>
          <span className="non-insurance-tag">GOVERNMENT RELIEF (NOT INSURANCE)</span>
        </div>

        <h2>🇮🇳 Government Disaster Relief & Assistance</h2>
        <p className="relief-subtitle">
          Check the indicative government assistance that may apply to your damaged property.
        </p>

        <div className="relief-statutory-notice">
          <Info size={18} className="icon-info-blue" />
          <span>
            <strong>Official Policy Notice:</strong> Indicative government assistance based on applicable disaster-relief norms. Actual assistance depends on official damage assessment, eligibility, applicable government orders and the type/location of disaster.
          </span>
        </div>
      </div>

      {/* Main Grid: Form & Result */}
      <div className="relief-calculator-grid">
        {/* Input Form Card */}
        <div className="relief-form-card">
          <div className="form-card-header">
            <h3><Calculator size={18} className="inline-icon text-blue" /> Property Damage Details</h3>
            <span className="form-step-tag">Step 1 of 2: Select Parameters</span>
          </div>

          <form onSubmit={handleCalculate} className="relief-form">
            {/* Field A: State */}
            <div className="form-field-group">
              <label htmlFor="state-select">
                <span>A. State / Union Territory:</span>
                {selectedState === 'Maharashtra' && <span className="verified-pill">Verified SDRF Data</span>}
              </label>
              <select
                id="state-select"
                className="relief-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {INDIAN_STATES_LIST.map((st) => (
                  <option key={st} value={st}>
                    {st} {st === 'Maharashtra' ? '★ (Verified SDRF Rates)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Field B: Disaster Type */}
            <div className="form-field-group">
              <label htmlFor="disaster-select">B. Disaster Type:</label>
              <select
                id="disaster-select"
                className="relief-select"
                value={selectedDisaster}
                onChange={(e) => setSelectedDisaster(e.target.value)}
              >
                {DISASTER_TYPES.map((dt) => (
                  <option key={dt} value={dt}>{dt}</option>
                ))}
              </select>
            </div>

            {/* Field C: Property Type */}
            <div className="form-field-group">
              <label htmlFor="property-select">C. Property Type:</label>
              <select
                id="property-select"
                className="relief-select"
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </div>

            {/* Field D: Damage Level */}
            <div className="form-field-group">
              <label htmlFor="damage-select">D. Damage Level:</label>
              <select
                id="damage-select"
                className="relief-select"
                value={selectedDamage}
                onChange={(e) => setSelectedDamage(e.target.value)}
              >
                {DAMAGE_LEVELS.map((dl) => (
                  <option key={dl} value={dl}>{dl}</option>
                ))}
              </select>
            </div>

            {/* Field E: Area Type */}
            <div className="form-field-group">
              <label htmlFor="area-select">E. Area Type:</label>
              <select
                id="area-select"
                className="relief-select"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                {AREA_TYPES.map((at) => (
                  <option key={at} value={at}>{at}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="calculate-btn"
              disabled={!isFormComplete}
            >
              <Calculator size={18} />
              <span>Calculate Indicative Assistance</span>
            </button>
          </form>
        </div>

        {/* Results Card */}
        <div className="relief-result-container">
          {!isCalculated ? (
            <div className="result-placeholder-card">
              <Landmark size={48} className="placeholder-icon" />
              <h3>Indicative Assistance Assessment</h3>
              <p>Select your state, property, and damage extent on the left and click <strong>"Calculate Indicative Assistance"</strong> to evaluate SDRF relief norms.</p>
              <div className="placeholder-tags">
                <span>✓ Sourced from Official SDRF/NDRF</span>
                <span>✓ Verified Housing Repair Norms</span>
              </div>
            </div>
          ) : result && result.status === 'verified' ? (
            <div className="result-card-animated verified">
              <div className="result-card-top">
                <span className="result-kicker">GOVERNMENT DISASTER ASSISTANCE</span>
                <span className="result-state-tag">{result.stateName} • SDRF</span>
              </div>

              <div className="result-amount-section">
                <span className="amount-label">Estimated / Indicative Assistance</span>
                <div className="amount-display">{result.formattedAmount}</div>
                <span className="amount-sub">Government relief assistance</span>
              </div>

              {result.note && (
                <div className="result-note-badge">
                  <CheckCircle2 size={14} />
                  <span>{result.note}</span>
                </div>
              )}

              {/* Assessment Breakdown */}
              <div className="result-breakdown-grid">
                <div className="breakdown-item">
                  <span className="item-label">Disaster:</span>
                  <span className="item-value">{result.disasterType}</span>
                </div>
                <div className="breakdown-item">
                  <span className="item-label">Property:</span>
                  <span className="item-value">{result.propertyType}</span>
                </div>
                <div className="breakdown-item">
                  <span className="item-label">Damage:</span>
                  <span className="item-value">{result.damageLevel}</span>
                </div>
                <div className="breakdown-item">
                  <span className="item-label">Area:</span>
                  <span className="item-value">{result.areaType}</span>
                </div>
              </div>

              {/* Verified Source Citation */}
              <div className="result-source-line">
                <FileText size={13} />
                <span>Source: {result.source}</span>
              </div>

              {/* Disclaimer */}
              <div className="result-disclaimer-box">
                <AlertTriangle size={18} className="icon-warning" />
                <p>
                  <strong>⚠️ Important Notice:</strong> This is an indicative estimate, not a guaranteed payment. Final assistance is determined by the competent government authority after official damage assessment and according to the applicable rules.
                </p>
              </div>
            </div>
          ) : (
            /* Unverified State / Insufficient Damage Fallback */
            <div className="result-card-animated unverified">
              <div className="result-card-top">
                <span className="result-kicker text-amber">STATE DISASTER RELIEF ADVISORY</span>
                <span className="result-state-tag">{result.stateName}</span>
              </div>

              <div className="unverified-message-box">
                <Info size={24} className="icon-info-amber" />
                <h4>{result.message}</h4>
                <p>{result.guidance}</p>
              </div>

              <div className="unverified-breakdown">
                <div><span>Disaster:</span> <strong>{result.disasterType}</strong></div>
                <div><span>Property:</span> <strong>{result.propertyType}</strong></div>
                <div><span>Damage Extent:</span> <strong>{result.damageLevel}</strong></div>
              </div>

              <div className="unverified-action-buttons">
                <button
                  type="button"
                  className="state-contact-btn"
                  onClick={onNavigateToContacts}
                >
                  <PhoneCall size={14} />
                  <span>State Disaster Management Authority</span>
                </button>
                <button
                  type="button"
                  className="state-contact-btn secondary"
                  onClick={onNavigateToContacts}
                >
                  <Building size={14} />
                  <span>District Administration</span>
                </button>
                <a
                  href="https://ndma.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="state-contact-btn link-btn"
                >
                  <span>Official Government Sources</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="result-disclaimer-box">
                <AlertTriangle size={18} className="icon-warning" />
                <p>
                  <strong>⚠️ Official Assessment Note:</strong> Disaster relief norms are subject to State Executive Committee (SEC) and State Disaster Response Fund (SDRF) notification for the specific event.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Near-Results Legal Disclaimer */}
      <div className="statutory-legal-disclaimer">
        <Info size={16} className="text-muted-icon" />
        <p>
          <strong>Legal Disclaimer:</strong> Information provided by this tool is for preparedness and educational purposes only. It does not constitute a guarantee of government compensation or financial assistance. Actual eligibility and assistance are determined by the competent authorities under the applicable government rules and damage assessment.
        </p>
      </div>

      {/* Section 6: Support Categories */}
      <div className="support-categories-section">
        <div className="section-header-row">
          <div>
            <h3><LifeBuoy size={20} className="inline-icon text-blue" /> What kind of support may be available?</h3>
            <p>Under official SDRF/NDRF guidelines, government assistance covers multiple rehabilitation sectors.</p>
          </div>
          <span className="category-tag">Eligibility varies by disaster & state rules</span>
        </div>

        <div className="support-cards-grid">
          {SUPPORT_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="support-card">
              <div className="support-icon-box">
                {renderSupportIcon(cat.icon)}
              </div>
              <h4>{cat.title}</h4>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7: How to Claim Assistance */}
      <div className="claim-process-section">
        <div className="section-header-row">
          <div>
            <h3><FileText size={20} className="inline-icon text-green" /> How to Claim Government Disaster Assistance</h3>
            <p>Official 5-step standard procedure followed by State Revenue and Relief Departments.</p>
          </div>
          <button
            type="button"
            className="find-contacts-btn"
            onClick={onNavigateToContacts}
          >
            <PhoneCall size={14} />
            <span>Find Emergency / Government Contacts</span>
          </button>
        </div>

        <div className="claim-steps-grid">
          {CLAIM_STEPS.map((stepItem, idx) => (
            <div key={idx} className="claim-step-card">
              <div className="step-number-circle">{stepItem.step}</div>
              <h4>{stepItem.title}</h4>
              <p>{stepItem.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8: Official Source Section */}
      <div className="official-sources-section">
        <div className="section-header-row">
          <div>
            <h3><ShieldCheck size={20} className="inline-icon text-amber" /> Official Government Sources & Authorities</h3>
            <p>Verify official disaster relief notifications and SDRF allocation orders exclusively on government portals.</p>
          </div>
          <span className="gov-domain-tag">.gov.in / .nic.in Authorized Domains</span>
        </div>

        <div className="official-sources-grid">
          {OFFICIAL_SOURCES.map((source, idx) => (
            <div key={idx} className="gov-source-card">
              <div className="gov-source-top">
                <span className="gov-portal-badge">OFFICIAL GOVERNMENT PORTAL</span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="gov-visit-link"
                >
                  Visit Portal <ExternalLink size={13} />
                </a>
              </div>
              <h4>{source.name}</h4>
              <p>{source.desc}</p>
              <div className="gov-url-text">{source.url}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
