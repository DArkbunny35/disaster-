import React, { useState, useRef, useEffect } from 'react';
import { processUserQuery } from '../utils/advisorEngine';
import {
  Send, AlertTriangle, ShieldAlert, Volume2, VolumeX, Building, Trees,
  Zap, Info, RefreshCw, PhoneCall, ExternalLink, ArrowRight, BookOpen
} from 'lucide-react';

export default function AdvisorChat({ onTriggerEmergency }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'advisor',
      text: `DISASTER PREPAREDNESS ADVISOR — NDMA / SDMA / IMD GUIDELINES
I provide documented action steps for floods, earthquakes, fires, and cyclones in India.

• In an active emergency: State your location & disaster for immediate contacts + 3-5 imperative steps.
• For preparedness: Request official checklists for urban or rural contexts.
• Prediction requests (whether/when/where) will be redirected to IMD.`,
      ruleTriggered: 'RULE_2_PREPAREDNESS_QA',
      ruleName: 'System Initialized',
      badgeType: 'info',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [contextMode, setContextMode] = useState('urban'); // 'urban' or 'rural'
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (queryOverride = null) => {
    const textToProcess = queryOverride || inputQuery;
    if (!textToProcess.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToProcess,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const engineResult = processUserQuery(textToProcess, contextMode);

    const advisorMsg = {
      id: Date.now() + 1,
      sender: 'advisor',
      text: engineResult.text,
      ruleTriggered: engineResult.ruleTriggered,
      ruleName: engineResult.ruleName,
      badgeType: engineResult.badgeType,
      isEmergency: engineResult.isEmergency,
      contacts: engineResult.contacts,
      redirectUrl: engineResult.redirectUrl,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg, advisorMsg]);
    setInputQuery('');

    if (engineResult.isEmergency) {
      onTriggerEmergency(true);
    }
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const cleanText = text.replace(/[*#\•\[\]]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  const sampleScenarios = [
    {
      label: "Rule 0: Water Rising Now (Dehradun)",
      query: "Water is entering my house in Uttarakhand rising fast right now! What do I do?",
      type: "emergency"
    },
    {
      label: "Rule 0: Ground Shaking Now (Delhi)",
      query: "The ground is shaking earthquake right now in Delhi! I am trapped inside!",
      type: "emergency"
    },
    {
      label: "Rule 0: Smoke & Fire in Building (Mumbai)",
      query: "There's smoke and fire in my building in Mumbai now! How do we get out?",
      type: "emergency"
    },
    {
      label: "Rule 1: Prediction Refusal",
      query: "Will it flood in Patna Bihar tomorrow?",
      type: "prediction"
    },
    {
      label: "Rule 2: Urban Flood Prep",
      query: "What is the official flood preparedness checklist for an apartment in Bangalore?",
      type: "prep"
    },
    {
      label: "Rule 2: Rural Village Prep",
      query: "Documented rural flood prep kit for farmer with livestock in Assam village",
      type: "prep"
    }
  ];

  return (
    <div className="chat-container">
      {/* Top Controller Bar */}
      <div className="chat-header-bar">
        <div className="context-selector">
          <span className="context-label">Context Bias Filter:</span>
          <button
            className={`context-btn ${contextMode === 'urban' ? 'active' : ''}`}
            onClick={() => setContextMode('urban')}
          >
            <Building size={14} />
            <span>Urban / Apartment</span>
          </button>
          <button
            className={`context-btn ${contextMode === 'rural' ? 'active' : ''}`}
            onClick={() => setContextMode('rural')}
          >
            <Trees size={14} />
            <span>Rural / Village</span>
          </button>
        </div>

        <div className="chat-rule-info">
          <Zap size={14} className="icon-pulse" />
          <span>Speed Guarantee: Sub-10 Sec Readability for Rule 0</span>
        </div>
      </div>

      {/* Preset Test Scenarios */}
      <div className="presets-bar">
        <span className="presets-title"><BookOpen size={13} /> Test Scenarios:</span>
        <div className="presets-pills">
          {sampleScenarios.map((scenario, index) => (
            <button
              key={index}
              className={`preset-pill ${scenario.type}`}
              onClick={() => handleSend(scenario.query)}
            >
              {scenario.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Feed */}
      <div className="messages-feed">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-wrapper ${msg.sender} ${msg.isEmergency ? 'emergency-msg' : ''}`}
          >
            {msg.sender === 'advisor' && (
              <div className="message-badge-bar">
                <span className={`badge-tag ${msg.badgeType || 'info'}`}>
                  {msg.ruleName || 'NDMA Rule'}
                </span>
                <button
                  className="tts-btn"
                  onClick={() => handleSpeak(msg.text)}
                  title="Audio Emergency Broadcast"
                >
                  {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{isSpeaking ? 'Stop Audio' : 'Audio Listen'}</span>
                </button>
                <span className="msg-time">{msg.timestamp}</span>
              </div>
            )}

            <div className="message-content">
              {msg.isEmergency && (
                <div className="emergency-header-alert">
                  <ShieldAlert size={20} />
                  <span>ACTIVE EMERGENCY INTERCEPTION TRIGGERED (RULE 0)</span>
                </div>
              )}

              <pre className="message-text">{msg.text}</pre>

              {msg.redirectUrl && (
                <div className="redirect-card">
                  <Info size={16} />
                  <div>
                    <strong>Official Forecast Redirect:</strong>
                    <p>For real-time weather forecasts and official warnings, visit IMD or your SDMA.</p>
                    <a href={msg.redirectUrl} target="_blank" rel="noreferrer" className="redirect-link">
                      Go to India Meteorological Department (mausam.imd.gov.in) <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="chat-input-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="input-form"
        >
          <input
            type="text"
            className="chat-input"
            placeholder="Type active emergency (e.g. 'water entering my house now'), ask preparedness, or check contacts..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <button type="submit" className="send-btn">
            <Send size={16} />
            <span>Submit Query</span>
          </button>
        </form>
      </div>
    </div>
  );
}
