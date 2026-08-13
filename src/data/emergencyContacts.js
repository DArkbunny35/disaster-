export const NATIONAL_CONTACTS = [
  { name: "All-India Emergency Number (Police/Fire/Ambulance)", number: "112", description: "Unified Emergency Response Support System (ERSS)" },
  { name: "NDMA Control Room", number: "011-1078 / 011-26701728", description: "National Disaster Management Authority Headquarters" },
  { name: "NDRF Helpline", number: "011-24363260 / 9711077372", description: "National Disaster Response Force Dispatch" },
  { name: "National Poison Information Centre", number: "1800-116-117", description: "AIIMS New Delhi Emergency Hotline" },
  { name: "Indian Red Cross Society", number: "011-23716441", description: "Disaster Relief & First Aid Services" }
];

export const STATE_CONTACTS = {
  "uttarakhand": {
    stateName: "Uttarakhand",
    capital: "Dehradun",
    shelters: ["Government School Building", "Panchayat Ghar", "Designated Hill Flood/Landslide Shelter"],
    disasters: {
      flood: ["1070", "9557444486 (State Flood Control Room)"],
      earthquake: ["1070", "0135-2710334 (USDMA Control Room)"],
      fire: ["101", "112"],
      landslide: ["1070", "0135-2710335"]
    }
  },
  "maharashtra": {
    stateName: "Maharashtra (Mumbai / MMR)",
    capital: "Mumbai",
    shelters: ["Municipal School Building", "Designated Coastal Flood Shelter", "Community Hall"],
    disasters: {
      flood: ["1916 (BMC Helpline)", "108 (MMR Control Room)", "1070 (State)"],
      earthquake: ["1070", "022-22027990 (State Disaster Management)"],
      fire: ["101", "022-23076111 (Mumbai Fire Brigade)"]
    }
  },
  "gujarat": {
    stateName: "Gujarat",
    capital: "Gandhinagar",
    shelters: ["Designated Cyclone & Flood Shelter", "Government Primary School", "Samaj Bhavan"],
    disasters: {
      flood: ["1078", "1077", "079-23251900 (GSDMA)"],
      earthquake: ["1078", "079-23251902"],
      fire: ["101", "112"]
    }
  },
  "assam": {
    stateName: "Assam",
    capital: "Dispur / Guwahati",
    shelters: ["Designated High-Raised Flood Shelter", "Government School Building", "Embankment Relief Camp"],
    disasters: {
      flood: ["1077", "1070", "0361-2237011 (ASDMA Control Room)"],
      earthquake: ["1077", "1070"],
      fire: ["101", "112"]
    }
  },
  "kerala": {
    stateName: "Kerala",
    capital: "Thiruvananthapuram",
    shelters: ["Designated Coastal/Flood Shelter", "Government Higher Secondary School", "Community Health Center"],
    disasters: {
      flood: ["1070", "1077", "0471-2331645 (KSDMA Emergency Operations)"],
      earthquake: ["1070", "1077"],
      fire: ["101", "112"]
    }
  },
  "karnataka": {
    stateName: "Karnataka",
    capital: "Bengaluru",
    shelters: ["BBMP School Building", "Designated Flood Shelter", "Panchayat Community Hall"],
    disasters: {
      flood: ["080-1070 (State Control Room / WhatsApp)", "1533 (BBMP Bengaluru)", "1077"],
      earthquake: ["080-1070"],
      fire: ["101", "112"]
    }
  },
  "tamil nadu": {
    stateName: "Tamil Nadu (Chennai)",
    capital: "Chennai",
    shelters: ["GCC School Building", "Designated Multi-Purpose Coastal Shelter", "Community Center"],
    disasters: {
      flood: ["1070 (State)", "1078 (Chennai GCC)", "044-28888100"],
      earthquake: ["1070"],
      fire: ["101", "112"]
    }
  },
  "bihar": {
    stateName: "Bihar",
    capital: "Patna",
    shelters: ["Designated High-Raised Flood Shelter", "Government School", "Panchayat Bhavan"],
    disasters: {
      flood: ["1078", "06115-252525 (BSDMA Control Room)"],
      earthquake: ["1078"],
      fire: ["101", "112"]
    }
  },
  "delhi": {
    stateName: "Delhi (NCT)",
    capital: "New Delhi",
    shelters: ["Government School Building", "Community Center", "Designated Yamuna Flood Relief Camp"],
    disasters: {
      flood: ["011-24611210", "011-24611108", "1077 (DDMA)"],
      earthquake: ["1077", "011-22421656"],
      fire: ["101", "011-23414000 (Delhi Fire Service)"]
    }
  },
  "rajasthan": {
    stateName: "Rajasthan",
    capital: "Jaipur",
    shelters: ["Government School Building", "Community Hall"],
    disasters: {
      flood: ["1078", "0141-2227296 (State Relief Control Room)"],
      earthquake: ["1078"],
      fire: ["101", "112"]
    }
  },
  "odisha": {
    stateName: "Odisha",
    capital: "Bhubaneswar",
    shelters: ["Designated Multi-Purpose Cyclone & Flood Shelter (OSDMA)", "Government High School"],
    disasters: {
      flood: ["1078", "0674-2534177 (OSDMA Control Room)"],
      earthquake: ["1078"],
      fire: ["101", "112"]
    }
  },
  "west bengal": {
    stateName: "West Bengal",
    capital: "Kolkata",
    shelters: ["Designated Cyclone/Flood Shelter", "KMC Municipal School", "Community Center"],
    disasters: {
      flood: ["1070", "1077", "033-22143526"],
      earthquake: ["1070"],
      fire: ["101", "112"]
    }
  },
  "uttar pradesh": {
    stateName: "Uttar Pradesh",
    capital: "Lucknow",
    shelters: ["Government School Building", "Panchayat Bhavan", "Designated Flood Shelter"],
    disasters: {
      flood: ["1070", "0522-2238084 (UPSDMA Control Room)"],
      earthquake: ["1070"],
      fire: ["101", "112"]
    }
  },
  "himachal pradesh": {
    stateName: "Himachal Pradesh",
    capital: "Shimla",
    shelters: ["Government Senior Secondary School", "Panchayat Ghar", "Designated Relief Center"],
    disasters: {
      flood: ["1070", "1077", "0177-2812344 (HPSDMA)"],
      earthquake: ["1070", "1077"],
      fire: ["101", "112"],
      landslide: ["1070", "1077"]
    }
  },
  "punjab": {
    stateName: "Punjab",
    capital: "Chandigarh",
    shelters: ["Government School Building", "Community Center"],
    disasters: {
      flood: ["1070", "1077", "0172-2740397"],
      earthquake: ["1070"],
      fire: ["101", "112"]
    }
  },
  "jammu and kashmir": {
    stateName: "Jammu & Kashmir",
    capital: "Srinagar / Jammu",
    shelters: ["Government Higher Secondary School", "Designated Relief Center"],
    disasters: {
      flood: ["1070", "0194-2452138 (Srinagar)", "0191-2560276 (Jammu)"],
      earthquake: ["1070"],
      fire: ["101", "112"]
    }
  }
};

export const getContactsForQuery = (stateInput = "", disasterInput = "") => {
  const normalizedState = stateInput.toLowerCase().trim();
  const normalizedDisaster = disasterInput.toLowerCase().trim();

  let matchedStateKey = Object.keys(STATE_CONTACTS).find(
    (key) => normalizedState.includes(key) || key.includes(normalizedState)
  );

  if (!matchedStateKey) {
    // Check if state is in stateName
    matchedStateKey = Object.keys(STATE_CONTACTS).find((key) =>
      STATE_CONTACTS[key].stateName.toLowerCase().includes(normalizedState)
    );
  }

  const result = {
    foundState: matchedStateKey ? STATE_CONTACTS[matchedStateKey].stateName : null,
    shelterCategory: matchedStateKey
      ? STATE_CONTACTS[matchedStateKey].shelters[0]
      : "Government school building / Designated local relief shelter",
    nationalContacts: NATIONAL_CONTACTS.slice(0, 3),
    stateContacts: [],
    fallbackMessage: null
  };

  if (matchedStateKey) {
    const stateObj = STATE_CONTACTS[matchedStateKey];
    let nums = [];
    if (normalizedDisaster.includes("flood")) {
      nums = stateObj.disasters.flood || [];
    } else if (normalizedDisaster.includes("earthquake") || normalizedDisaster.includes("shak")) {
      nums = stateObj.disasters.earthquake || [];
    } else if (normalizedDisaster.includes("fire") || normalizedDisaster.includes("smoke")) {
      nums = stateObj.disasters.fire || [];
    } else if (normalizedDisaster.includes("landslide")) {
      nums = stateObj.disasters.landslide || stateObj.disasters.flood || [];
    } else {
      nums = stateObj.disasters.flood || stateObj.disasters.earthquake || [];
    }
    result.stateContacts = nums.map(n => ({ label: `${stateObj.stateName} Helpline`, number: n }));
  } else if (stateInput.trim().length > 0) {
    result.fallbackMessage = `State '${stateInput}' state-layer contacts are not directly indexed in local sample cache. Returning verified National Helplines (112, NDMA 011-1078, NDRF 011-24363260).`;
  }

  return result;
};
