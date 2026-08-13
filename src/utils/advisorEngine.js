import { getContactsForQuery } from '../data/emergencyContacts';
import { DISASTER_GUIDELINES } from '../data/ndmaGuidance';

// Keywords & RegEx for Rule 0 Active Emergency Detection
const EMERGENCY_PATTERNS = [
  /water\s+(is\s+)?(entering|rising|flooding|inside|in\s+my|coming\s+in)/i,
  /(ground|house|building|floor)\s+(is\s+)?shaking/i,
  /earthquake\s+(right\s+now|happening|now|shaking)/i,
  /(there's|there\s+is|fire|smoke)\s+(in|on|my|our)\s+(building|house|room|apartment|floor)\s*(now)?/i,
  /(i'm|i\s+am|we\s+are)\s+(trapped|stuck|cannot\s+get\s+out|can't\s+get\s+out)/i,
  /(injured|missing|under\s+debris|collapsed)/i,
  /help\s+me\s+now/i,
  /sos/i
];

// Keywords for Rule 1 Prediction Detection
const PREDICTION_PATTERNS = [
  /will\s+(there\s+be|it)\s+(flood|earthquake|cyclone|rain|shake|happen|hit)/i,
  /when\s+will\s+(the\s+next|a)\s+(flood|earthquake|cyclone|disaster)/i,
  /predict/i,
  /is\s+(a\s+)?(flood|earthquake|cyclone|disaster)\s+coming/i,
  /forecast\s+for\s+next\s+(week|month|year)/i
];

// List of Indian states for detection
const INDIAN_STATES = [
  "uttarakhand", "maharashtra", "mumbai", "gujarat", "assam", "kerala",
  "karnataka", "bengaluru", "bangalore", "tamil nadu", "chennai", "bihar",
  "patna", "delhi", "rajasthan", "odisha", "west bengal", "kolkata",
  "uttar pradesh", "lucknow", "himachal pradesh", "shimla", "punjab", "jammu", "kashmir"
];

export const processUserQuery = (queryText, contextMode = 'urban') => {
  const query = queryText.trim();
  const lowerQuery = query.toLowerCase();

  // 1. Detect State mentioned in query
  let detectedState = "";
  for (const st of INDIAN_STATES) {
    if (lowerQuery.includes(st)) {
      detectedState = st;
      break;
    }
  }

  // 2. Detect Disaster Type
  let detectedDisaster = "flood";
  if (lowerQuery.includes("earthquake") || lowerQuery.includes("shak")) {
    detectedDisaster = "earthquake";
  } else if (lowerQuery.includes("fire") || lowerQuery.includes("smoke")) {
    detectedDisaster = "fire";
  } else if (lowerQuery.includes("cyclone") || lowerQuery.includes("storm")) {
    detectedDisaster = "cyclone";
  } else if (lowerQuery.includes("flood") || lowerQuery.includes("water") || lowerQuery.includes("rain")) {
    detectedDisaster = "flood";
  }

  // ==========================================
  // RULE 0: EMERGENCY INTERCEPTION (Highest Priority)
  // ==========================================
  const isEmergency = EMERGENCY_PATTERNS.some(pattern => pattern.test(lowerQuery));

  if (isEmergency) {
    const contactData = getContactsForQuery(detectedState, detectedDisaster);
    const guidelines = DISASTER_GUIDELINES[detectedDisaster] || DISASTER_GUIDELINES.flood;

    let contactLines = [];
    if (contactData.foundState && contactData.stateContacts.length > 0) {
      contactLines.push(`EMERGENCY CONTACTS (${contactData.foundState.toUpperCase()} - ${detectedDisaster.toUpperCase()}):`);
      contactData.stateContacts.forEach(c => {
        contactLines.push(`• ${c.label}: ${c.number}`);
      });
      contactData.nationalContacts.forEach(nc => {
        contactLines.push(`• ${nc.name}: ${nc.number}`);
      });
    } else {
      contactLines.push(`NATIONAL EMERGENCY CONTACTS (State not specified - please state your location immediately):`);
      contactData.nationalContacts.forEach(nc => {
        contactLines.push(`• ${nc.name}: ${nc.number}`);
      });
      contactLines.push(`• Standard State Helplines: 1070 (State Control Room) / 1077 (District Control Room)`);
    }

    contactLines.push(`• Designated Shelter Category: ${contactData.shelterCategory}`);

    const immediateSteps = guidelines.emergencyBullets;

    // Strict Rule 0 Output format with ZERO PREAMBLE and ZERO conversational sign-off
    const responseText = [
      contactLines.join("\n"),
      "",
      `IMMEDIATE ACTION STEPS (NDMA Guidelines - ${guidelines.title}):`,
      ...immediateSteps.map(step => `• ${step}`)
    ].join("\n");

    return {
      ruleTriggered: "RULE_0_EMERGENCY",
      ruleName: "Rule 0: Emergency Interception",
      badgeType: "danger",
      isEmergency: true,
      text: responseText,
      contacts: contactData,
      guidelines: immediateSteps,
      detectedDisaster,
      detectedState: contactData.foundState || "National"
    };
  }

  // ==========================================
  // RULE 1: MANDATORY REFUSAL (NO PREDICTION)
  // ==========================================
  const isPrediction = PREDICTION_PATTERNS.some(pattern => pattern.test(lowerQuery));

  if (isPrediction) {
    const stateDisplay = detectedState ? (detectedState.charAt(0).toUpperCase() + detectedState.slice(1)) : "your state";
    const refusalText = `I can't predict disasters — that's outside what documented guidance can responsibly tell you. For live forecasts and warnings, check IMD (mausam.imd.gov.in) or your State Disaster Management Authority. I can help you prepare: want the documented preparedness checklist for ${detectedDisaster} in ${stateDisplay}?`;

    return {
      ruleTriggered: "RULE_1_PREDICTION_REFUSAL",
      ruleName: "Rule 1: Prediction Refusal",
      badgeType: "warning",
      isEmergency: false,
      text: refusalText,
      redirectUrl: "https://mausam.imd.gov.in",
      detectedDisaster,
      detectedState
    };
  }

  // ==========================================
  // RULE 2: PREPAREDNESS Q&A (Non-Emergency)
  // ==========================================
  const guidelines = DISASTER_GUIDELINES[detectedDisaster] || DISASTER_GUIDELINES.flood;
  const isRural = contextMode === 'rural' || lowerQuery.includes("rural") || lowerQuery.includes("village") || lowerQuery.includes("panchayat") || lowerQuery.includes("farm") || lowerQuery.includes("cattle") || lowerQuery.includes("livestock");

  const contextData = isRural ? guidelines.ruralContext : guidelines.urbanContext;

  let textLines = [];
  textLines.push(`DOCUMENTED PREPAREDNESS CHECKLIST (${guidelines.title} - ${isRural ? 'Rural/Village Context' : 'Urban Context'})`);
  textLines.push(`Source: ${guidelines.source}`);
  textLines.push("");

  if (isRural && contextData.limitedGuidanceNotice) {
    textLines.push(`[NOTICE]: ${contextData.limitedGuidanceNotice}`);
    textLines.push("");
  }

  textLines.push("BEFORE DISASTER (PREPARATION & KITS):");
  contextData.before.forEach(item => textLines.push(`[ ] ${item}`));
  textLines.push("");

  textLines.push("DURING DISASTER (SURVIVAL ACTIONS):");
  contextData.during.forEach(item => textLines.push(`[ ] ${item}`));
  textLines.push("");

  textLines.push("AFTER DISASTER (RECOVERY & SAFETY):");
  contextData.after.forEach(item => textLines.push(`[ ] ${item}`));

  const contactData = getContactsForQuery(detectedState, detectedDisaster);

  return {
    ruleTriggered: "RULE_2_PREPAREDNESS_QA",
    ruleName: "Rule 2: Preparedness Q&A",
    badgeType: "info",
    isEmergency: false,
    text: textLines.join("\n"),
    guidelinesObj: contextData,
    contacts: contactData,
    isRural,
    detectedDisaster,
    sourceCitation: guidelines.source
  };
};
