const BIG_FOUR_SNAKES_DATA = {
  "common-krait": {
    id: "common-krait",
    commonName: "Common Krait",
    scientificName: "Bungarus caeruleus",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    tags: ["Nocturnal", "Big Four", "Terrestrial"],
    headerImage: "/main/common.png",
    overview: {
      description: "The Common Krait is one of the most dangerous snakes in South Asia. Known for its glossy black scales and thin white crossbands, it is a member of the 'Big Four'.",
      temperament: "Generally shy and docile during the day, but becomes active and more defensive at night."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment: "Fields, low scrub jungles, and often found near human habitations searching for prey.",
      prey: "Primarily feeds on other snakes, lizards, and small mammals."
    },
    identification: {
      color: "Glossy black, pale blue, or dark brown.",
      patterns: "40–50 thin white crossbands that may be indistinct or absent near the head.",
      eyes: "Small, dark eyes with round pupils.",
      scales: "Hexagonal vertebral scales (the scales running along the spine) are noticeably enlarged."
    },
    safety: {
      firstAid: "Immobilize the bitten limb, keep the patient calm, and seek immediate anti-venom treatment. Do not use a tourniquet.",
      prevention: "Wear boots when walking in tall grass at night and use a flashlight."
    },
    mapData: {
      activeHotspots: ["Western Ghats", "Indo-Gangetic Plain"]
    }
  },

  "spectacled-cobra": {
    id: "spectacled-cobra",
    commonName: "Spectacled Cobra",
    scientificName: "Naja naja",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    tags: ["Diurnal/Nocturnal", "Big Four", "Iconic"],
    headerImage: "/main/cobra.png",
    overview: {
      description: "Also known as the Indian Cobra, it is famous for its impressive hood which often reveals a 'spectacle' mark on the back.",
      temperament: "Alert and defensive; it will rear up and hiss loudly to warn off intruders but strikes if provoked."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment: "Agricultural lands, forests, and often near human settlements where rodents are plentiful.",
      prey: "Primarily feeds on rodents, frogs, toads, and occasionally birds."
    },
    identification: {
      color: "Varies from tan and brown to grey or black.",
      patterns: "Distinctive 'U' or 'O' shaped spectacle mark on the rear of the hood.",
      eyes: "Medium-sized with round pupils.",
      scales: "Smooth scales; a wide head that expands into a hood."
    },
    safety: {
      firstAid: "Keep the victim calm, immobilize the limb, and transport to a hospital with anti-venom immediately.",
      prevention: "Keep surroundings clear of debris; use a stick to disturb tall grass before walking."
    },
    mapData: {
      distributionImage: "/maps/spectacled-cobra-range.png",
      activeHotspots: ["Indo-Gangetic Plains", "Southern India"]
    }
  },

  "russells-viper": {
    id: "russells-viper",
    commonName: "Russell's Viper",
    scientificName: "Daboia russelii",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    tags: ["Nocturnal", "Big Four", "Ambush Predator"],
    headerImage: "/main/russells.png",
    overview: {
      description: "Responsible for the highest number of serious snakebite incidents in India. It is a thick-bodied snake known for a very loud hiss.",
      temperament: "Sluggish but highly irritable; it strikes with incredible speed and power from a coiled position."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment: "Open grassy areas, scrub jungles, and farmlands. Avoids dense forests.",
      prey: "Strictly carnivorous, feeding mostly on rodents."
    },
    identification: {
      color: "Deep yellow, tan, or brown.",
      patterns: "Three rows of dark brown spots with black/white borders resembling a chain.",
      eyes: "Large eyes with gold flecks and vertical pupils.",
      scales: "Strongly keeled scales (rough texture); head is distinctly triangular."
    },
    safety: {
      firstAid: "Seek emergency medical help. Do not apply tight pressure bandages; local swelling is severe.",
      prevention: "Avoid walking barefoot in fields; use a flashlight and wear thick boots."
    },
    mapData: {
      activeHotspots: ["Western Coast", "Punjab", "West Bengal"]
    }
  },

  "saw-scaled-viper": {
    id: "saw-scaled-viper",
    commonName: "Saw-scaled Viper",
    scientificName: "Echis carinatus",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    tags: ["Nocturnal", "Big Four", "Aggressive"],
    headerImage: "/main/saw-scaled.png",
    overview: {
      description: "The smallest of the Big Four. It makes a rasping 'sawing' sound by rubbing its scales together when threatened.",
      temperament: "Extremely defensive and quick to strike; moves in a 'sidewinding' motion."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Middle East"],
      environment: "Arid, rocky, and sandy regions. Often hides under rocks or loose bark.",
      prey: "Scorpions, centipedes, large insects, frogs, and small rodents."
    },
    identification: {
      color: "Grey, brown, or reddish ground color.",
      patterns: "A distinctive '+' or 'bird's foot' mark on top of the head; white 'bow' shapes on sides.",
      eyes: "Large eyes with vertical, slit-like pupils.",
      scales: "Heavily keeled, serrated scales."
    },
    safety: {
      firstAid: "Reach a hospital quickly. Venom causes severe blood-clotting issues; do not delay treatment.",
      prevention: "Watch steps in rocky terrain; never reach into crevices with bare hands."
    },
    mapData: {
      activeHotspots: ["Maharashtra", "Rajasthan", "Tamil Nadu"]
    }
  }
};