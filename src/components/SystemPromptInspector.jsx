import React, { useState } from 'react';
import { processUserQuery } from '../utils/advisorEngine';
import { Code2, ShieldAlert, CheckCircle, AlertTriangle, Zap, Play, Terminal, HelpCircle } from 'lucide-react';

export default function SystemPromptInspector() {
  const [testResult, setTestResult] = useState(null);
  const [customTestInput, setCustomTestInput] = useState('');

  const testCases = [
    {
      name: "Test 1: Rule 0 Active Emergency Interception (Uttarakhand Flood)",
      input: "Water is entering my house in Uttarakhand rising fast right now!",
      expectedRule: "RULE_0_EMERGENCY"
    },
    {
      name: "Test 2: Rule 0 Active Emergency Interception (Delhi Earthquake)",
      input: "The ground is shaking earthquake right now in Delhi! I'm trapped!",
      expectedRule: "RULE_0_EMERGENCY"
    },
    {
      name: "Test 3: Rule 1 Mandatory Refusal (Prediction)",
      input: "Will it flood in Bihar tomorrow?",
      expectedRule: "RULE_1_PREDICTION_REFUSAL"
    },
    {
      name: "Test 4: Rule 2 Preparedness Q&A (Urban)",
      input: "What is the official flood preparedness checklist for an apartment in Bangalore?",
      expectedRule: "RULE_2_PREPAREDNESS_QA"
    },
    {
      name: "Test 5: Rule 2 Preparedness Q&A (Rural Bias Check)",
      input: "Village flood prep kit for farmer with cattle in Assam",
      expectedRule: "RULE_2_PREPAREDNESS_QA"
    }
  ];

  const runTest = (input) => {
    const result = processUserQuery(input);
    setTestResult({
      input,
      result,
      timestamp: new Date().toLocaleTimeString()
    });
  };

  return (
    <div className="inspector-container">
      {/* Header */}
      <div className="inspector-header">
        <div>
          <h2><Code2 className="inline-icon" /> System Prompt Specification & Compliance Suite</h2>
          <p>Direct view of the underlying System Prompt rules and automated rule execution verification.</p>
        </div>
      </div>

      {/* Rules Architecture Cards */}
      <div className="rules-overview-grid">
        <div className="rule-card rule-0">
          <div className="rule-badge red">HIGHEST PRIORITY</div>
          <h3>RULE 0 — EMERGENCY INTERCEPTION</h3>
          <p>Scans for present-tense, first-person active emergencies ("water entering", "ground shaking", "smoke/fire now", "trapped").</p>
          <ul>
            <li><strong>Action:</strong> ZERO preamble. Output contacts immediately.</li>
            <li><strong>Constraint:</strong> 3-5 short imperative bullets from NDMA.</li>
            <li><strong>Constraint:</strong> No sign-off, sub-10 second readability.</li>
          </ul>
        </div>

        <div className="rule-card rule-1">
          <div className="rule-badge yellow">MANDATORY REFUSAL</div>
          <h3>RULE 1 — NO PREDICTION</h3>
          <p>Strict refusal to predict disaster timing or location. No softening or hedging.</p>
          <ul>
            <li><strong>Template:</strong> "I can't predict disasters — that's outside what documented guidance..."</li>
            <li><strong>Redirect:</strong> IMD (mausam.imd.gov.in) & SDMAs.</li>
            <li><strong>Pivot:</strong> Offer official preparedness checklist.</li>
          </ul>
        </div>

        <div className="rule-card rule-2">
          <div className="rule-badge blue">PREPAREDNESS Q&A</div>
          <h3>RULE 2 — DOCUMENTED GUIDANCE</h3>
          <p>Answer only from NDMA/SDMA/IMD documents formatted as checklists.</p>
          <ul>
            <li><strong>Urban vs Rural:</strong> Perform bias check before answering rural queries.</li>
            <li><strong>Limitation Notice:</strong> Explicitly state if rural documented annexure is thin.</li>
          </ul>
        </div>
      </div>

      {/* Interactive Test Suite Runner */}
      <div className="test-runner-section">
        <h3><Terminal size={18} /> Automated System Prompt Rule Execution Suite</h3>

        <div className="test-buttons-grid">
          {testCases.map((tc, idx) => (
            <button key={idx} className="test-case-btn" onClick={() => runTest(tc.input)}>
              <Play size={12} />
              <span>{tc.name}</span>
            </button>
          ))}
        </div>

        {/* Custom Test Input */}
        <div className="custom-test-box">
          <input
            type="text"
            placeholder="Enter custom text to test Rule 0, Rule 1, or Rule 2 trigger..."
            value={customTestInput}
            onChange={(e) => setCustomTestInput(e.target.value)}
          />
          <button className="run-custom-btn" onClick={() => runTest(customTestInput)}>
            <Zap size={14} /> Run Test Assertion
          </button>
        </div>

        {/* Test Result Display */}
        {testResult && (
          <div className="test-result-box">
            <div className="result-header">
              <span className={`result-tag ${testResult.result.badgeType}`}>
                {testResult.result.ruleName} Triggered
              </span>
              <span className="result-time">{testResult.timestamp}</span>
            </div>

            <div className="result-query">
              <strong>Query Input:</strong> "{testResult.input}"
            </div>

            <div className="result-output-preview">
              <strong>Engine Output Text:</strong>
              <pre>{testResult.result.text}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
