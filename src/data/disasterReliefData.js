/**
 * Government Disaster Relief & Assistance Data Module (India)
 * Sourced from Ministry of Home Affairs (MHA) National Disaster Response Fund (NDRF) /
 * State Disaster Response Fund (SDRF) Revised Norms (Order No. 33-01/2022-NDM-I)
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
 * Standard Statutory Housing Relief Norms under Ministry of Home Affairs (MHA)
 * SDRF / NDRF Guidelines (applicable across all Indian States & Union Territories).
 */
export const NATIONAL_SDRF_BASELINE_RULES = {
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
};

/**
 * State Authority Mapping for verified citations
 */
export const STATE_AUTHORITY_MAPPINGS = {
  "maharashtra": {
    stateName: "Maharashtra",
    source: "Maharashtra Relief & Rehabilitation Dept / SDRF Guidelines (MHA Norms)"
  },
  "gujarat": {
    stateName: "Gujarat",
    source: "Gujarat State Disaster Management Authority (GSDMA) / SDRF Norms"
  },
  "goa": {
    stateName: "Goa",
    source: "Goa Disaster Management Authority / SDRF Norms"
  },
  "karnataka": {
    stateName: "Karnataka",
    source: "Karnataka State Disaster Management Authority (KSDMA) / SDRF Norms"
  },
  "kerala": {
    stateName: "Kerala",
    source: "Kerala State Disaster Management Authority (KSDMA) / SDRF Norms"
  },
  "tamil nadu": {
    stateName: "Tamil Nadu",
    source: "Tamil Nadu Disaster Management Authority (TNDMA) / SDRF Norms"
  },
  "andhra pradesh": {
    stateName: "Andhra Pradesh",
    source: "Andhra Pradesh State Disaster Management Authority (APSDMA) / SDRF Norms"
  },
  "telangana": {
    stateName: "Telangana",
    source: "Telangana State Disaster Management Authority (TGSDMA) / SDRF Norms"
  },
  "odisha": {
    stateName: "Odisha",
    source: "Odisha State Disaster Management Authority (OSDMA) / SDRF Norms"
  },
  "west bengal": {
    stateName: "West Bengal",
    source: "West Bengal Disaster Management & Civil Defence / SDRF Norms"
  },
  "assam": {
    stateName: "Assam",
    source: "Assam State Disaster Management Authority (ASDMA) / SDRF Norms"
  },
  "bihar": {
    stateName: "Bihar",
    source: "Bihar State Disaster Management Authority (BSDMA) / SDRF Norms"
  },
  "uttar pradesh": {
    stateName: "Uttar Pradesh",
    source: "Uttar Pradesh State Disaster Management Authority (UPSDMA) / SDRF Norms"
  },
  "uttarakhand": {
    stateName: "Uttarakhand",
    source: "Uttarakhand State Disaster Management Authority (USDMA) / SDRF Norms"
  },
  "himachal pradesh": {
    stateName: "Himachal Pradesh",
    source: "Himachal Pradesh State Disaster Management Authority (HPSDMA) / SDRF Norms"
  },
  "jammu & kashmir": {
    stateName: "Jammu & Kashmir",
    source: "Jammu & Kashmir Disaster Management Authority (JKDMA) / SDRF Norms"
  },
  "punjab": {
    stateName: "Punjab",
    source: "Punjab State Disaster Management Authority / SDRF Norms"
  },
  "haryana": {
    stateName: "Haryana",
    source: "Haryana State Disaster Management Authority / SDRF Norms"
  },
  "rajasthan": {
    stateName: "Rajasthan",
    source: "Rajasthan Disaster Management, Relief & Civil Defence / SDRF Norms"
  },
  "madhya pradesh": {
    stateName: "Madhya Pradesh",
    source: "Madhya Pradesh State Disaster Management Authority (MPSDMA) / SDRF Norms"
  },
  "chhattisgarh": {
    stateName: "Chhattisgarh",
    source: "Chhattisgarh State Disaster Management Authority / SDRF Norms"
  },
  "jharkhand": {
    stateName: "Jharkhand",
    source: "Jharkhand State Disaster Management Authority (JSDMA) / SDRF Norms"
  },
  "delhi": {
    stateName: "Delhi",
    source: "Delhi Disaster Management Authority (DDMA) / SDRF Norms"
  },
  "other": {
    stateName: "All India (National Baseline)",
    source: "Ministry of Home Affairs (MHA) National SDRF/NDRF Revised Norms"
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
  const stateMeta = STATE_AUTHORITY_MAPPINGS[normalizedState] || {
    stateName: state,
    source: "Ministry of Home Affairs (MHA) SDRF/NDRF Guidelines & Respective SDMA"
  };

  const propertyRules = NATIONAL_SDRF_BASELINE_RULES[propertyType];
  const damageRules = propertyRules ? propertyRules[damageLevel] : null;
  const rawAmount = damageRules ? damageRules[areaType] : null;

  if (rawAmount === null || rawAmount === undefined) {
    if (damageLevel === "Minor damage") {
      return {
        status: "minor_damage",
        stateName: stateMeta.stateName,
        disasterType,
        propertyType,
        damageLevel,
        areaType,
        amount: null,
        message: "Partial housing relief under SDRF norms requires a minimum threshold of 15% structural damage.",
        guidance: "Minor cosmetic damages below the 15% structural loss threshold do not qualify for standard housing repair grants under SDRF rules, though immediate gratuitous emergency relief (clothing, food packets, utensils) may still be provided if families are evacuated to relief camps."
      };
    }

    return {
      status: "unverified_combination",
      stateName: stateMeta.stateName,
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
    note = "Standard statutory assistance for damaged or completely destroyed temporary huts.";
  }

  return {
    status: "verified",
    stateName: stateMeta.stateName,
    disasterType,
    propertyType,
    damageLevel,
    areaType,
    amount: rawAmount,
    formattedAmount,
    note,
    source: stateMeta.source
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
