import { getContactsForQuery } from '../data/emergencyContacts';
import { DISASTER_GUIDELINES } from '../data/ndmaGuidance';

// Keywords & RegEx for Rule 0 Active Emergency Detection
const EMERGENCY_PATTERNS = [
  /water\s+(is\s+)?(entering|rising|flooding|inside|in\s+my|coming\s+in)/i,
  /(ground|house|building|floor)\s+(is\s+)?shaking/i,
  /earthquake\s+(right\s+now|happening|now|shaking)/i,
  /(there's|there\s+is|fire|smoke)\s+(in|on|my|our)\s+(building|house|room|apartment|floor)\s*(now)?/i,
  /(i'm|i\s+am|we\s+are)\s+(trapped|stuck|cannot\s+get\s+out|can't\s+get\s+out)/i,
  /(someone\s+(is\s+)?(breaking\s+in|inside\s+my\s+house|intruder|attacking))/i,
  /(severe\s+bleeding|not\s+breathing|cardiac\s+arrest|snakebite\s+now|choking\s+now|gas\s+leak\s+now)/i,
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

// Disaster & Physical Emergency/Safety Topics Allowlist Patterns
const DISASTER_AND_SAFETY_PATTERNS = [
  // Natural disasters & extreme weather
  /\b(flood|flooding|inundat|waterlog|submerge|river|dam\s+break|overflow)\b/i,
  /\b(earthquake|tremor|quake|seismic|aftershock|richter|fault\s+line)\b/i,
  /\b(tsunami|tidal\s+wave|storm\s+surge)\b/i,
  /\b(cyclone|typhoon|hurricane|storm|thunderstorm|lightning|gale|heavy\s+rain|cloudburst|downpour|monsoon)\b/i,
  /\b(landslide|mudslide|rockslide|avalanche|debris\s+flow|sinkhole)\b/i,
  /\b(heatwave|loo|coldwave|drought|extreme\s+weather|tornado|hailstorm)\b/i,

  // Fire & hazardous materials
  /\b(fire|blaze|smoke|flame|wildfire|cylinder\s+(blast|leak)|gas\s+leak|lpg\s+leak|chemical\s+spill|explosion|building\s+collapse)\b/i,

  // Physical & Medical Emergencies
  /\b(medical\s+emergency|ambulance|cpr|cardiac|heart\s+attack|stroke|unconscious|faint|bleeding|wound|fracture|broken\s+bone|burns?|scalds?|electrocution|electric\s+shock|snakebite|poison|poisoning|drowning|choking|hypothermia|heatstroke|first\s+aid)\b/i,
  /\b(home\s+intrusion|intruder|break[- ]in|burglar|robber|assault|physical\s+safety|trapped|stuck|evacuat|sos|rescue|helpline)\b/i,

  // Disaster Management & Preparedness Terms
  /\b(disaster|emergency|preparedness|prep|survival|go[- ]bag|disaster\s+kit|emergency\s+kit|first\s+aid\s+kit|ndma|sdma|ndrf|sdrf|ddma|erss|imd|cwc|red\s+alert|orange\s+alert|yellow\s+alert|shelter|relief\s+camp|do'?s\s+and\s+don'?ts|hazard|siren|drill|safety\s+measures|safety\s+protocol|safety\s+tips)\b/i,

  // Direct Emergency Numbers
  /\b(112|108|101|100|1070|1077|1078)\b/
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

  // ==========================================
  // TOPIC FILTER: REFUSE UNRELATED EVERYDAY QUERIES
  // ==========================================
  const isDisasterOrSafetyRelated = DISASTER_AND_SAFETY_PATTERNS.some(pattern => pattern.test(lowerQuery)) ||
    EMERGENCY_PATTERNS.some(pattern => pattern.test(lowerQuery)) ||
    PREDICTION_PATTERNS.some(pattern => pattern.test(lowerQuery));

  if (!isDisasterOrSafetyRelated) {
    return {
      ruleTriggered: "RULE_UNRELATED_REFUSAL",
      ruleName: "Topic Refusal",
      badgeType: "warning",
      isEmergency: false,
      text: "I am specifically designed for disaster preparedness and emergency response. I cannot assist with everyday tasks or unrelated topics."
    };
  }

  // 1. Detect State mentioned in query
  let detectedState = "";
  for (const st of INDIAN_STATES) {
    if (lowerQuery.includes(st)) {
      detectedState = st;
      break;
    }
  }

  // 2. Detect Disaster / Emergency Category
  let detectedDisaster = "flood";
  if (lowerQuery.includes("earthquake") || lowerQuery.includes("shak") || lowerQuery.includes("tremor")) {
    detectedDisaster = "earthquake";
  } else if (lowerQuery.includes("fire") || lowerQuery.includes("smoke") || lowerQuery.includes("flame") || lowerQuery.includes("cylinder")) {
    detectedDisaster = "fire";
  } else if (lowerQuery.includes("cyclone") || lowerQuery.includes("storm") || lowerQuery.includes("wind") || lowerQuery.includes("tornado")) {
    detectedDisaster = "cyclone";
  } else if (lowerQuery.includes("intrusion") || lowerQuery.includes("intruder") || lowerQuery.includes("break in") || lowerQuery.includes("burglar")) {
    detectedDisaster = "intrusion";
  } else if (
    lowerQuery.includes("medical") ||
    lowerQuery.includes("cpr") ||
    lowerQuery.includes("heart attack") ||
    lowerQuery.includes("bleed") ||
    lowerQuery.includes("snakebite") ||
    lowerQuery.includes("poison") ||
    lowerQuery.includes("first aid") ||
    lowerQuery.includes("choking") ||
    lowerQuery.includes("unconscious")
  ) {
    detectedDisaster = "medical";
  } else if (lowerQuery.includes("flood") || lowerQuery.includes("water") || lowerQuery.includes("rain") || lowerQuery.includes("inundat")) {
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
      `IMMEDIATE ACTION STEPS (NDMA / Emergency Guidelines - ${guidelines.title}):`,
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
