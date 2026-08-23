export const DISASTER_GUIDELINES = {
  flood: {
    title: "Floods & Heavy Inundation",
    source: "NDMA National Disaster Management Guidelines: Management of Floods & Urban Floods (2010/2021)",
    emergencyBullets: [
      "Switch off main electrical power breaker and gas line immediately — DO NOT touch wet electrical switches.",
      "Move children, elderly, valuables, and emergency kit to upper floors or roof immediately.",
      "DO NOT walk, drive, or swim through moving floodwaters (6 inches of moving water can knock you down, 2 feet will float a car).",
      "Stay connected: tune in to battery radio or mobile phone alerts for official evacuation notices.",
      "If trapped inside a submerged building, signal from top roof/window using a bright cloth or whistle — do not enter closed attics without roof exits."
    ],
    urbanContext: {
      before: [
        "Store 3 days of clean drinking water in sealed containers (2 liters per person per day).",
        "Keep emergency kit: torch, radio, whistle, spare batteries, first aid kit, essential medicines, dry food, copies of IDs in waterproof pouch.",
        "Clear balcony drains and clear nearby street storm drains if accessible before rain."
      ],
      during: [
        "Move to higher floors in apartment building. Do not use elevators.",
        "Disconnect all electric appliances. Do not enter flooded basements or underground parking garages.",
        "Follow traffic updates — avoid waterlogged underpasses, subways, and low-lying roads."
      ],
      after: [
        "Do not eat food exposed to floodwater.",
        "Boil drinking water or treat with chlorine tablets before consuming.",
        "Beware of fallen power lines and snakes/rodents seeking shelter in buildings."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "Official NDMA rural annexures emphasize livestock evacuation and Kutcha house vulnerability. Note: Documented rural micro-guidance varies by Panchayati Raj District Plan.",
      before: [
        "Identify high-ground relief platforms (Pucca school buildings, elevated Panchayati structures, high embankments).",
        "Untether cattle and livestock early if water enters village so animals can swim to high ground.",
        "Protect stored grain and seed stock by raising on wooden charpais or loft platforms above flood line."
      ],
      during: [
        "Do not cross overflowing village culverts, causeways (Raptas), or flooded nallahs on foot or bullock cart.",
        "Move family and livestock to designated Gram Panchayat raised platform shelter.",
        "Drink only tube-well water if headhand pump is above floodline; chlorinate open well water."
      ],
      after: [
        "Bury animal carcasses promptly with lime powder to prevent epidemic outbreaks.",
        "Inspect mud/kutcha house walls for structural cracking before re-entering."
      ]
    }
  },

  earthquake: {
    title: "Earthquake & Tremors",
    source: "NDMA National Disaster Management Guidelines: Management of Earthquakes",
    emergencyBullets: [
      "DROP, COVER, AND HOLD ON: Drop to hands and knees immediately under a sturdy desk or table, cover head/neck, and hold on until shaking stops.",
      "If indoors: Stay inside! Stay away from glass windows, heavy mirrors, tall bookcases, and unanchored furniture.",
      "If outdoors: Move to an open area away from tall buildings, power lines, street lamps, and overpasses.",
      "If driving: Pull over safely to open roadside away from trees/overpasses; stay inside vehicle until tremors cease.",
      "DO NOT use elevators or staircase during active tremors."
    ],
    urbanContext: {
      before: [
        "Secure heavy furniture, ceiling fans, gas cylinders, and wall hangings to studs.",
        "Identify safe Drop-Cover-Hold spots in every room (under heavy dining table, inner load-bearing corner).",
        "Keep building emergency exit stairways clear of plant pots, shoes, and debris."
      ],
      during: [
        "Take shelter under heavy furniture. Cover head with pillow or arms.",
        "In high-rise buildings, stay away from perimeter walls and balcony windows.",
        "Expect aftershocks. Do not run to stairwells while building is actively swaying."
      ],
      after: [
        "Check for gas leaks — do not strike matches or turn on electrical switches if gas odor present.",
        "Use emergency stairwells carefully to evacuate if building shows structural cracks.",
        "Check neighbors and administer basic first aid for minor cuts/sprains."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "NDMA Earthquake guidelines for rural/kutcha housing emphasize mud-wall failure modes and animal shelter safety.",
      before: [
        "Inspect tile roofs (Khaprail) and mud-brick walls for existing cracks and reinforce timber posts.",
        "Keep village open grounds (Maidan/Khel Maidan) clear for emergency gathering."
      ],
      during: [
        "If inside a traditional kutcha mud house with heavy thatched roof, quickly exit to open compound if exit is within 2 steps; otherwise protect head under wooden charpai.",
        "Move away from heavy masonry boundary walls and tube-well water tanks."
      ],
      after: [
        "Be cautious around unstable mud walls or leaning thatched roofs.",
        "Check cattle sheds for roof collapses or trapped animals."
      ]
    }
  },

  fire: {
    title: "Building & Residential Fire",
    source: "NDMA Guidelines on Fire Services & National Building Code of India (Part 4 Fire & Life Safety)",
    emergencyBullets: [
      "GET OUT AND STAY OUT: Evacuate immediately. Never re-enter a burning building for pets or possessions.",
      "CRAWL LOW UNDER SMOKE: Smoke rises — breath cleaner air near the floor. Cover nose with a damp cloth if available.",
      "TEST DOORS BEFORE OPENING: Feel door knob/top with back of hand. If HOT, DO NOT OPEN — use alternate exit.",
      "STOP, DROP, AND ROLL: If clothing catches fire, cover face, drop to ground, and roll back and forth until flames are out.",
      "CALL 112 / 101: Call fire brigade immediately once outside in a safe location."
    ],
    urbanContext: {
      before: [
        "Install and test smoke detectors on every floor; keep a multi-purpose ABC dry powder extinguisher near kitchen.",
        "Know 2 evacuation routes from every room in apartment/office.",
        "Never block fire escape stairwells or leave fire doors propped open."
      ],
      during: [
        "Use staircase ONLY. Never take elevators during a fire alert.",
        "If trapped in room: Seal door gaps with wet towels, wave bright cloth at window, and call 112 giving exact room number."
      ],
      after: [
        "Get evaluated by medical team for smoke inhalation even if feeling fine.",
        "Do not enter building until certified safe by Fire Officer."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "Rural fire guidance focuses on thatch-roof fires, crop-field fires, and LPG cylinder safety in rural kitchens.",
      before: [
        "Store dry fodder, straw, and thatch materials at least 30 meters away from cooking stoves and dwellings.",
        "Keep sand buckets and stored water drums outside kitchen area."
      ],
      during: [
        "Alert neighbors immediately by shouting 'Aag! Aag!' and beating village gong/drum.",
        "Douse adjacent thatched roofs with water/mud to create a firebreak if safe.",
        "Evacuate family and release tethered livestock downwind from smoke."
      ],
      after: [
        "Check embers thoroughly to prevent re-ignition from wind gusts."
      ]
    }
  },

  cyclone: {
    title: "Cyclone & Severe Storms",
    source: "NDMA National Cyclone Risk Mitigation Project (NCRMP) & IMD Guidelines",
    emergencyBullets: [
      "Move to designated Pucca Cyclone Shelter or high ground immediately upon Red Warning.",
      "Disconnect electrical mains and LPG gas supply before evacuating.",
      "Stay indoors during the 'EYE OF THE CYCLONE' — calm weather does not mean storm is over; fierce reverse winds follow.",
      "Keep away from windows, glass doors, and tin roofs.",
      "Beware of flying debris, loose tin sheets, and uprooted trees."
    ],
    urbanContext: {
      before: [
        "Board up windows or apply cross-taping on window panes to prevent flying glass fragments.",
        "Trim overhanging tree branches near power lines or roof tiles.",
        "Store emergency food, water, torch, powerbanks, and essential medicines."
      ],
      during: [
        "Remain inside internal room without windows. Stay away from roof skylights.",
        "Keep tuned to IMD bulletins on battery-operated radio."
      ],
      after: [
        "Do not touch dangling electrical wires.",
        "Beware of fallen trees, unstable hoardings, and flooded roads."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "NDMA Coastal Cyclone guidelines mandate early evacuation of Kutcha huts to Cyclone Relief Shelters.",
      before: [
        "Evacuate mud/kutcha huts, thatched houses, and coastal fishing hamlets to Pucca Cyclone Shelters early.",
        "Secure fishing boats, nets, and livestock in safe inland compounds."
      ],
      during: [
        "Do not venture into sea or flooded creeks under any circumstances.",
        "Stay inside community cyclone shelter until official clear signal."
      ],
      after: [
        "Watch out for snakebites in damp debris.",
        "Use chlorinated water only to avoid cholera/diarrhea outbreaks."
      ]
    }
  },

  medical: {
    title: "Medical & Physical Emergencies (First Aid)",
    source: "National Health Mission / Indian Red Cross Society Emergency First Aid Guidelines",
    emergencyBullets: [
      "CALL 112 / 108 IMMEDIATELY for Emergency Ambulance dispatch and provide exact location.",
      "CHECK RESPONSIVENESS & AIRWAY: Check if person is conscious and breathing normally.",
      "SEVERE BLEEDING: Apply direct firm pressure on wound with a sterile dressing or clean cloth. Elevate limb if no fracture.",
      "UNRESPONSIVE & NOT BREATHING (CPR): Place hands in center of chest, push hard and fast (100–120 compressions/min).",
      "SNAKEBITE: Keep patient calm and completely still. Immobilize bitten limb below heart level. DO NOT cut, suck, or apply tourniquet."
    ],
    urbanContext: {
      before: [
        "Maintain a certified First Aid Kit with sterile gauze, adhesive bandages, antiseptic, burn gel, CPR mask, and scissors.",
        "Keep emergency contacts (112, 108, nearest trauma center) saved on speed dial."
      ],
      during: [
        "Assess scene safety before approaching casualty.",
        "Do not move suspected spinal/neck injury victims unless in immediate physical danger (fire/collapse).",
        "Keep casualty warm and reassure them while awaiting ambulance."
      ],
      after: [
        "Hand over incident details and exact symptoms observed to paramedics.",
        "Restock used first aid supplies immediately."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "In rural settings, rapid transport to Primary Health Centre (PHC) / Community Health Centre (CHC) with anti-venom and trauma stabilization is vital.",
      before: [
        "Know the location of the nearest Gram Panchayat PHC equipped with anti-snake venom and oxygen.",
        "Keep a dedicated emergency transport contact (Gram Panchayat vehicle / 108 ambulance link)."
      ],
      during: [
        "For snakebite: Note snake description if possible, immobilize limb with splint, transport to PHC immediately.",
        "For heatstroke: Move patient to shade, apply wet cloths to neck, armpits, and groin, give ORS/water if conscious."
      ],
      after: [
        "Ensure full medical evaluation at PHC/District Hospital before discharge."
      ]
    }
  },

  intrusion: {
    title: "Home Intrusion & Physical Threat Protocol",
    source: "Ministry of Home Affairs / Emergency Response Support System (ERSS 112) Safety Guidelines",
    emergencyBullets: [
      "CALL 112 / 100 IMMEDIATELY: Keep phone on silent/low volume and whisper exact address and situation to dispatcher.",
      "BARRICADE & HIDE: Move to a lockable room, lock door, turn off lights, silence all phones, stay out of sight.",
      "DO NOT CONFRONT INTRUDER: Prioritize life safety and escape over property defense.",
      "ESCAPE SAFELY IF CLEAR: If a safe alternate exit (window/backdoor) is available without crossing the intruder, evacuate immediately.",
      "SIGNAL FOR HELP: If trapped, use silent emergency SOS on phone or signal neighbors once safe."
    ],
    urbanContext: {
      before: [
        "Install solid deadbolts, peepholes, window latches, and apartment security door chains.",
        "Maintain good relations with building security guards and society WhatsApp alert groups."
      ],
      during: [
        "Lock bedroom door, barricade with heavy furniture if intruder is inside house.",
        "Do not turn on lights; observe from safe angle and relay details to 112."
      ],
      after: [
        "Wait for verified Police arrival before opening doors.",
        "Do not touch door handles, windows, or items to preserve forensic evidence."
      ]
    },
    ruralContext: {
      limitedGuidanceNotice: "In village contexts, collective Gram Suraksha and community alarm systems are crucial.",
      before: [
        "Ensure sturdy boundary gates and secure cattle sheds.",
        "Keep village emergency whistle or alert system accessible."
      ],
      during: [
        "Alert neighbors/Panchayat members through quick phone call or covert signal if safe.",
        "Stay barricaded until help arrives."
      ],
      after: [
        "Report incident immediately to Gram Pradhan and local Police Thana."
      ]
    }
  }
};
