/**
 * Government Disaster Relief & Assistance Data Module (India)
 * Sourced from State Disaster Response Fund (SDRF) / National Disaster Response Fund (NDRF) Norms
 * and State Government Relief & Rehabilitation Department guidelines.
 */

export const INDIAN_STATES_LIST = [
  "Maharashtra",
  "Gujarat",
  "Goa",
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Odisha",
  "West Bengal",
  "Assam",
  "Bihar",
  "Uttar Pradesh",
  "Uttarakhand",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Punjab",
  "Haryana",
  "Rajasthan",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Jharkhand",
  "Delhi",
  "Other"
];

export const DISASTER_TYPES = [
  "Flood",
  "Earthquake",
  "Cyclone",
  "Landslide",
  "Cloudburst",
  "Heavy Rain",
  "Other notified natural disaster"
];

export const PROPERTY_TYPES = [
  "Pucca house",
  "Kutcha house",
  "Hut",
  "Other residential structure"
];

export const DAMAGE_LEVELS = [
  "Minor damage",
  "Partially damaged",
  "Severely damaged",
  "Completely destroyed"
];

export const AREA_TYPES = [
  "Plain area",
  "Hilly/remote area"
];

/**
 * Structured state-specific relief database.
 * If data is unavailable for a state/disaster combination, values return null.
 */
export const STATE_RELIEF_DATABASE = {
  "maharashtra": {
    stateName: "Maharashtra",
    source: "Maharashtra Relief and Rehabilitation Department / SDRF Revised Guidelines",
    // All notified natural disasters generally follow standard housing relief norms
    rules: {
      "Pucca house": {
        "Completely destroyed": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Severely damaged": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Partially damaged": {
          "Plain area": 6500,
          "Hilly/remote area": 6500
        },
        "Minor damage": {
          "Plain area": null,
          "Hilly/remote area": null
        }
      },
      "Kutcha house": {
        "Completely destroyed": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Severely damaged": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Partially damaged": {
          "Plain area": 4000,
          "Hilly/remote area": 4000
        },
        "Minor damage": {
          "Plain area": null,
          "Hilly/remote area": null
        }
      },
      "Hut": {
        "Completely destroyed": {
          "Plain area": 8000,
          "Hilly/remote area": 8000
        },
        "Severely damaged": {
          "Plain area": 8000,
          "Hilly/remote area": 8000
        },
        "Partially damaged": {
          "Plain area": 8000,
          "Hilly/remote area": 8000
        },
        "Minor damage": {
          "Plain area": null,
          "Hilly/remote area": null
        }
      },
      "Other residential structure": {
        "Completely destroyed": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Severely damaged": {
          "Plain area": 120000,
          "Hilly/remote area": 130000
        },
        "Partially damaged": {
          "Plain area": 4000,
          "Hilly/remote area": 4000
        },
        "Minor damage": {
          "Plain area": null,
          "Hilly/remote area": null
        }
      }
    }
  }
};

/**
 * Calculates indicative government assistance based on selected parameters
 */
export const calculateAssistance = ({ state, disasterType, propertyType, damageLevel, areaType }) => {
  if (!state || !disasterType || !propertyType || !damageLevel || !areaType) {
    return null;
  }

  const normalizedState = state.toLowerCase().trim();
  const stateData = STATE_RELIEF_DATABASE[normalizedState];

  if (!stateData) {
    return {
      status: "unverified_state",
      stateName: state,
      disasterType,
      propertyType,
      damageLevel,
      areaType,
      amount: null,
      message: "State-specific assistance information is not currently available in this application.",
      guidance: "Government disaster relief may be available under applicable SDRF/NDRF and state government norms. Please verify the current amount with your State Disaster Management Authority / District Administration."
    };
  }

  const propertyRules = stateData.rules[propertyType];
  const damageRules = propertyRules ? propertyRules[damageLevel] : null;
  const rawAmount = damageRules ? damageRules[areaType] : null;

  if (rawAmount === null || rawAmount === undefined) {
    if (damageLevel === "Minor damage") {
      return {
        status: "minor_damage",
        stateName: stateData.stateName,
        disasterType,
        propertyType,
        damageLevel,
        areaType,
        amount: null,
        message: "Partial relief under SDRF norms typically requires a minimum threshold of 15% structural damage.",
        guidance: "Minor cosmetic damages below the 15% damage threshold may not qualify for standard housing repair subsidies under SDRF norms, though gratuitous emergency relief (clothing/utensils) may still apply if evacuated."
      };
    }

    return {
      status: "unverified_combination",
      stateName: stateData.stateName,
      disasterType,
      propertyType,
      damageLevel,
      areaType,
      amount: null,
      message: "Specific assistance value for this combination is subject to customized administrative assessment.",
      guidance: "Assistance is determined following a joint survey (Panchnama) by local revenue and engineering officers based on the exact extent of loss."
    };
  }

  // Format currency in Indian numbering system (e.g. ₹1,20,000)
  const formattedAmount = `₹${rawAmount.toLocaleString('en-IN')}`;

  let note = "";
  if (damageLevel === "Partially damaged") {
    note = "Requires a minimum verified 15% structural damage per official SDRF/NDRF norms.";
  } else if (damageLevel === "Completely destroyed" || damageLevel === "Severely damaged") {
    note = `Applicable for complete/severe structural collapse in ${areaType.toLowerCase()}.`;
  } else if (propertyType === "Hut") {
    note = "Standard assistance for damaged or completely destroyed temporary huts.";
  }

  return {
    status: "verified",
    stateName: stateData.stateName,
    disasterType,
    propertyType,
    damageLevel,
    areaType,
    amount: rawAmount,
    formattedAmount,
    note,
    source: stateData.source
  };
};

export const SUPPORT_CATEGORIES = [
  {
    icon: "Home",
    title: "House / Property Damage",
    desc: "Ex-gratia assistance for fully destroyed, severely damaged, or partially damaged residential houses and huts."
  },
  {
    icon: "Utensils",
    title: "Food & Essential Supplies",
    desc: "Gratuitous relief, cooked food packets, drinking water sachets, and cash allowance for loss of clothing/utensils."
  },
  {
    icon: "Tent",
    title: "Temporary Shelter",
    desc: "Provision of relief camps, community cyclone/flood shelters, and emergency tarpaulin sheets for displaced families."
  },
  {
    icon: "Droplets",
    title: "Drinking Water",
    desc: "Potable tanker water supply, chlorine tablet distribution, and disinfection of village open wells/tube wells."
  },
  {
    icon: "Hospital",
    title: "Medical Assistance",
    desc: "Emergency medical treatment, free mobile healthcare units, trauma stabilization, and epidemic surveillance."
  },
  {
    icon: "HeartHandshake",
    title: "Livestock Assistance",
    desc: "Financial assistance for loss of milch animals, draught cattle, sheep/goats, and emergency fodder supply."
  },
  {
    icon: "Sprout",
    title: "Crop / Agricultural Loss",
    desc: "Input subsidy assistance for small and marginal farmers experiencing crop loss exceeding 33% per hectare."
  },
  {
    icon: "LifeBuoy",
    title: "Search and Rescue",
    desc: "Immediate evacuation operations by NDRF, SDRF, and district rescue teams with boats and emergency airlift."
  }
];

export const CLAIM_STEPS = [
  {
    step: "1",
    title: "Report Disaster & Property Damage",
    desc: "Immediately inform your local Village Talathi, Gram Sevak, Patwari, or Municipal Ward Officer about the structural damage."
  },
  {
    step: "2",
    title: "Contact District Administration",
    desc: "Reach out to the Tahsildar / Sub-Divisional Magistrate (SDM) / District Disaster Management Authority (DDMA) office."
  },
  {
    step: "3",
    title: "Official Damage Assessment (Panchnama)",
    desc: "A joint field inspection is conducted by revenue and public works/engineering officials to assess the percentage of damage."
  },
  {
    step: "4",
    title: "Record & Verification in Relief Beneficiary List",
    desc: "The damage report, ownership proof, and bank account details are verified and entered into the district disaster relief register."
  },
  {
    step: "5",
    title: "Assistance Disbursement under SDRF/NDRF",
    desc: "Sanctioned assistance is credited via Direct Benefit Transfer (DBT) into the beneficiary bank account according to applicable government orders."
  }
];

export const OFFICIAL_SOURCES = [
  {
    name: "National Disaster Management Authority (NDMA)",
    url: "https://ndma.gov.in",
    desc: "Apex national authority for disaster management policies, guidelines, and national mitigation programs."
  },
  {
    name: "Ministry of Home Affairs – Disaster Management Division",
    url: "https://www.mha.gov.in/en/division-of-mha/disaster-management-division",
    desc: "Government of India ministry governing SDRF & NDRF allocation guidelines and disaster relief norms."
  },
  {
    name: "India Meteorological Department (IMD)",
    url: "https://mausam.imd.gov.in",
    desc: "Official weather warning, rainfall tracking, and cyclone bulletin issuing agency."
  },
  {
    name: "Maharashtra Relief and Rehabilitation Department",
    url: "https://mddrrd.maharashtra.gov.in",
    desc: "State department responsible for disaster damage relief compensation orders and SDRF disbursement in Maharashtra."
  },
  {
    name: "State Disaster Management Authorities (SDMAs)",
    url: "https://ndma.gov.in/State-Disaster-Management-Authorities",
    desc: "Directory of state disaster management authorities across all Indian states and Union Territories."
  }
];
