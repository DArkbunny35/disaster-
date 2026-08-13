import React, { useState } from 'react';
import { NATIONAL_CONTACTS, STATE_CONTACTS } from '../data/emergencyContacts';
import { PhoneCall, ShieldAlert, MapPin, Search, Filter, Home, CheckCircle2 } from 'lucide-react';

export default function EmergencyContactsMatrix() {
  const [searchState, setSearchState] = useState('');
  const [selectedDisaster, setSelectedDisaster] = useState('all');

  const stateKeys = Object.keys(STATE_CONTACTS);

  const filteredStateKeys = stateKeys.filter((key) => {
    const stateObj = STATE_CONTACTS[key];
    const matchesSearch =
      stateObj.stateName.toLowerCase().includes(searchState.toLowerCase()) ||
      stateObj.capital.toLowerCase().includes(searchState.toLowerCase());

    if (!matchesSearch) return false;
    return true;
  });

  return (
    <div className="contacts-matrix-container">
      {/* Top Banner */}
      <div className="contacts-header">
        <div className="header-info">
          <h2><ShieldAlert className="inline-icon text-red" /> Official Emergency Contacts Matrix (India)</h2>
          <p>
            Strict lookup table for National Emergency Response Support System (ERSS), State Disaster Management Authorities (SDMA), and District Control Rooms.
          </p>
        </div>
      </div>

      {/* National Helplines Bar */}
      <div className="national-contacts-grid">
        {NATIONAL_CONTACTS.map((contact, index) => (
          <div key={index} className="national-card">
            <div className="national-card-top">
              <span className="badge-national">NATIONAL HOTLINE</span>
              <a href={`tel:${contact.number.split('/')[0].trim()}`} className="call-link">
                <PhoneCall size={14} /> Call Now
              </a>
            </div>
            <h3>{contact.name}</h3>
            <div className="phone-number">{contact.number}</div>
            <p className="phone-desc">{contact.description}</p>
          </div>
        ))}
      </div>

      {/* State Filter Controls */}
      <div className="matrix-controls">
        <div className="search-input-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search state (e.g. Uttarakhand, Maharashtra, Assam, Bihar, Delhi)..."
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
          />
        </div>

        <div className="disaster-filter-buttons">
          <span className="filter-label"><Filter size={14} /> Filter by Event:</span>
          {['all', 'flood', 'earthquake', 'fire'].map((d) => (
            <button
              key={d}
              className={`filter-btn ${selectedDisaster === d ? 'active' : ''}`}
              onClick={() => setSelectedDisaster(d)}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* State Contact Grid */}
      <div className="states-grid">
        {filteredStateKeys.map((key) => {
          const state = STATE_CONTACTS[key];
          return (
            <div key={key} className="state-card">
              <div className="state-card-header">
                <div>
                  <h3><MapPin size={16} className="inline-icon" /> {state.stateName}</h3>
                  <span className="capital-tag">Capital / HQ: {state.capital}</span>
                </div>
              </div>

              {/* Shelter Category */}
              <div className="shelter-category-box">
                <Home size={14} />
                <span>NDMA Shelter Category: <strong>{state.shelters[0]}</strong></span>
              </div>

              {/* Numbers List */}
              <div className="state-numbers-list">
                {(selectedDisaster === 'all' || selectedDisaster === 'flood') && state.disasters.flood && (
                  <div className="number-row">
                    <span className="disaster-tag flood">FLOOD CONTROL</span>
                    <div className="numbers-group">
                      {state.disasters.flood.map((num, i) => (
                        <a key={i} href={`tel:${num.split(' ')[0]}`} className="phone-badge">
                          <PhoneCall size={12} /> {num}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {(selectedDisaster === 'all' || selectedDisaster === 'earthquake') && state.disasters.earthquake && (
                  <div className="number-row">
                    <span className="disaster-tag earthquake">EARTHQUAKE</span>
                    <div className="numbers-group">
                      {state.disasters.earthquake.map((num, i) => (
                        <a key={i} href={`tel:${num.split(' ')[0]}`} className="phone-badge">
                          <PhoneCall size={12} /> {num}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {(selectedDisaster === 'all' || selectedDisaster === 'fire') && state.disasters.fire && (
                  <div className="number-row">
                    <span className="disaster-tag fire">FIRE & RESCUE</span>
                    <div className="numbers-group">
                      {state.disasters.fire.map((num, i) => (
                        <a key={i} href={`tel:${num.split(' ')[0]}`} className="phone-badge">
                          <PhoneCall size={12} /> {num}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
