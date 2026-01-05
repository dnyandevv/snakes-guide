const SNAKES_DATA = {

  "common-krait": {
    id: "common-krait",
    commonName: "Common Krait",
    scientificName: "Bungarus caeruleus",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    image: "/the-big-four/ck.png",
    tags: ["Nocturnal", "Big Four", "Terrestrial"],
    headerImage: "/main/common.png",
    overview: {
      description:
        "The Common Krait is one of the most dangerous snakes in South Asia. Known for its glossy black scales and thin white crossbands, it is a member of the 'Big Four'.",
      temperament:
        "Generally shy and docile during the day, but becomes active and more defensive at night."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment:
        "Fields, low scrub jungles, and often found near human habitations searching for prey.",
      prey: "Primarily feeds on other snakes, lizards, and small mammals."
    },
    identification: {
      color: "Glossy black, pale blue, or dark brown.",
      patterns:
        "40–50 thin white crossbands that may be indistinct or absent near the head.",
      eyes: "Small, dark eyes with round pupils.",
      scales:
        "Hexagonal vertebral scales (the scales running along the spine) are noticeably enlarged."
    },
    safety: {
      firstAid:
        "Immobilize the bitten limb, keep the patient calm, and seek immediate anti-venom treatment. Do not use a tourniquet.",
      prevention:
        "Wear boots when walking in tall grass at night and use a flashlight."
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
    headerImage: "/main/cobra-header.png",
    image: "/the-big-four/kc.png",
    overview: {
      description:
        "Also known as the Indian Cobra, it is famous for its impressive hood which often reveals a 'spectacle' mark on the back.",
      temperament:
        "Alert and defensive; it will rear up and hiss loudly to warn off intruders but strikes if provoked."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment:
        "Agricultural lands, forests, and often near human settlements where rodents are plentiful.",
      prey: "Primarily feeds on rodents, frogs, toads, and occasionally birds."
    },
    identification: {
      color: "Varies from tan and brown to grey or black.",
      patterns:
        "Distinctive 'U' or 'O' shaped spectacle mark on the rear of the hood.",
      eyes: "Medium-sized with round pupils.",
      scales: "Smooth scales; a wide head that expands into a hood."
    },
    safety: {
      firstAid:
        "Keep the victim calm, immobilize the limb, and transport to a hospital with anti-venom immediately.",
      prevention:
        "Keep surroundings clear of debris; use a stick to disturb tall grass before walking."
    },
    mapData: {
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
    image: "/the-big-four/rv.png",
    overview: {
      description:
        "Responsible for the highest number of serious snakebite incidents in India. It is a thick-bodied snake known for a very loud hiss.",
      temperament:
        "Sluggish but highly irritable; it strikes with incredible speed and power from a coiled position."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
      environment:
        "Open grassy areas, scrub jungles, and farmlands. Avoids dense forests.",
      prey: "Strictly carnivorous, feeding mostly on rodents."
    },
    identification: {
      color: "Deep yellow, tan, or brown.",
      patterns:
        "Three rows of dark brown spots with black/white borders resembling a chain.",
      eyes: "Large eyes with gold flecks and vertical pupils.",
      scales:
        "Strongly keeled scales (rough texture); head is distinctly triangular."
    },
    safety: {
      firstAid:
        "Seek emergency medical help. Do not apply tight pressure bandages; local swelling is severe.",
      prevention:
        "Avoid walking barefoot in fields; use a flashlight and wear thick boots."
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
    headerImage: "/main/saw-scaled-viper.png",
    image: "/the-big-four/sv.jpg",
    overview: {
      description:
        "The smallest of the Big Four. It makes a rasping 'sawing' sound by rubbing its scales together when threatened.",
      temperament:
        "Extremely defensive and quick to strike; moves in a 'sidewinding' motion."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Middle East"],
      environment:
        "Arid, rocky, and sandy regions. Often hides under rocks or loose bark.",
      prey:
        "Scorpions, centipedes, large insects, frogs, and small rodents."
    },
    identification: {
      color: "Grey, brown, or reddish ground color.",
      patterns:
        "A distinctive '+' or 'bird's foot' mark on top of the head; white 'bow' shapes on sides.",
      eyes: "Large eyes with vertical, slit-like pupils.",
      scales: "Heavily keeled, serrated scales."
    },
    safety: {
      firstAid:
        "Reach a hospital quickly. Venom causes severe blood-clotting issues; do not delay treatment.",
      prevention:
        "Watch steps in rocky terrain; never reach into crevices with bare hands."
    },
    mapData: {
      activeHotspots: ["Maharashtra", "Rajasthan", "Tamil Nadu"]
    }
  },

  "king-cobra": {
    id: "king-cobra",
    commonName: "King Cobra",
    scientificName: "Ophiophagus hannah",
    venomStatus: "Venomous",
    dangerLevel: "Extreme",
    tags: ["Diurnal", "Largest Venomous Snake", "Forest Dweller"],
    headerImage: "/main/common.png",
    image: "/the-big-four/kc.png",
    overview: {
      description:
        "The longest venomous snake in the world, capable of delivering a massive venom dose.",
      temperament:
        "Shy but extremely aggressive when threatened, especially during nesting."
    },
    habitatDiet: {
      regions: ["India", "Southeast Asia"],
      environment: "Dense forests, bamboo thickets.",
      prey: "Other snakes, including venomous species."
    },
    identification: {
      color: "Olive, brown, or black.",
      patterns: "Pale yellow bands.",
      eyes: "Large with round pupils.",
      scales: "Smooth scales with narrow hood."
    },
    safety: {
      firstAid: "Immediate hospital care with anti-venom.",
      prevention: "Avoid forest trails without visibility."
    },
    mapData: {
      activeHotspots: ["Western Ghats", "Northeast India"]
    }
  },

  "banded-krait": {
    id: "banded-krait",
    commonName: "Banded Krait",
    scientificName: "Bungarus fasciatus",
    venomStatus: "Venomous",
    dangerLevel: "High",
    tags: ["Nocturnal", "Krait"],
    headerImage: "/main/common.png",
    image: "/the-big-four/ck.png",
    overview: {
      description:
        "A striking snake with bold black and yellow bands.",
      temperament: "Docile but venomous."
    },
    habitatDiet: {
      regions: ["India", "Bangladesh"],
      environment: "Fields, near water bodies.",
      prey: "Snakes, rodents."
    },
    identification: {
      color: "Black and yellow.",
      patterns: "Broad alternating bands.",
      eyes: "Small with round pupils.",
      scales: "Smooth and glossy."
    },
    safety: {
      firstAid: "Rush to hospital immediately.",
      prevention: "Avoid night walking barefoot."
    },
    mapData: {
      activeHotspots: ["Eastern India"]
    }
  },

  "indian-rock-python": {
    id: "indian-rock-python",
    commonName: "Indian Rock Python",
    scientificName: "Python molurus",
    venomStatus: "Non-venomous",
    dangerLevel: "Moderate",
    tags: ["Constrictor", "Protected"],
    headerImage: "/main/common.png",
    image: "/the-big-four/wolf-snake.jpg",
    overview: {
      description:
        "A massive non-venomous snake that kills prey by constriction.",
      temperament: "Generally calm."
    },
    habitatDiet: {
      regions: ["India"],
      environment: "Forests, wetlands.",
      prey: "Mammals and birds."
    },
    identification: {
      color: "Brown and tan.",
      patterns: "Large blotches.",
      eyes: "Vertical pupils.",
      scales: "Smooth."
    },
    safety: {
      firstAid: "Medical attention if injured.",
      prevention: "Do not approach."
    },
    mapData: {
      activeHotspots: ["Central India"]
    }
  },

  "rat-snake": {
    id: "rat-snake",
    commonName: "Indian Rat Snake",
    scientificName: "Ptyas mucosa",
    venomStatus: "Non-venomous",
    dangerLevel: "Low",
    tags: ["Diurnal", "Fast"],
    headerImage: "/main/common.png",
    image: "/the-big-four/kc.png",
    overview: {
      description:
        "A harmless snake often mistaken for a cobra.",
      temperament: "Very alert and fast."
    },
    habitatDiet: {
      regions: ["India"],
      environment: "Farmlands, villages.",
      prey: "Rodents."
    },
    identification: {
      color: "Brown or olive.",
      patterns: "Faint cross lines.",
      eyes: "Large with round pupils.",
      scales: "Smooth."
    },
    safety: {
      firstAid: "No venom risk.",
      prevention: "Allow escape."
    },
    mapData: {
      activeHotspots: ["Pan-India"]
    }
  },

  "green-vine-snake": {
    id: "green-vine-snake",
    commonName: "Green Vine Snake",
    scientificName: "Ahaetulla nasuta",
    venomStatus: "Mildly Venomous",
    dangerLevel: "Low",
    tags: ["Arboreal", "Slender"],
    headerImage: "/main/common.png",
    image: "/the-big-four/ck.png",
    overview: {
      description:
        "A thin, leaf-like snake with excellent camouflage.",
      temperament: "Calm but defensive."
    },
    habitatDiet: {
      regions: ["India"],
      environment: "Trees and shrubs.",
      prey: "Lizards."
    },
    identification: {
      color: "Bright green.",
      patterns: "None.",
      eyes: "Horizontal pupils.",
      scales: "Smooth."
    },
    safety: {
      firstAid: "Wash area.",
      prevention: "Avoid handling."
    },
    mapData: {
      activeHotspots: ["Western Ghats"]
    }
  },

  "checkered-keelback": {
    id: "checkered-keelback",
    commonName: "Checkered Keelback",
    scientificName: "Fowlea piscator",
    venomStatus: "Non-venomous",
    dangerLevel: "Low",
    tags: ["Semi-aquatic"],
    headerImage: "/main/common.png",
    image: "/the-big-four/sv.jpg",
    overview: {
      description:
        "A common water snake found near ponds and rivers.",
      temperament: "Aggressive but harmless."
    },
    habitatDiet: {
      regions: ["India"],
      environment: "Water bodies.",
      prey: "Fish and frogs."
    },
    identification: {
      color: "Olive or brown.",
      patterns: "Checkered markings.",
      eyes: "Round pupils.",
      scales: "Keeled."
    },
    safety: {
      firstAid: "Clean wound.",
      prevention: "Avoid handling."
    },
    mapData: {
      activeHotspots: ["Pan-India"]
    }
  },

  "wolf-snake": {
    id: "wolf-snake",
    commonName: "Common Wolf Snake",
    scientificName: "Lycodon aulicus",
    venomStatus: "Non-venomous",
    dangerLevel: "Low",
    image: "/snakes/wolf-snake.png",
    tags: ["Nocturnal", "Harmless", "Urban-Adapter", "Terrestrial"],
    headerImage: "/main/wolf-snake-header.png",
    overview: {
      description:
        "A slender, non-venomous snake frequently found in and around human dwellings. It is famous for its mimicry of the deadly Common Krait, which serves as a defense mechanism against predators.",
      temperament:
        "Nervous and defensive when confronted; it may bite readily if handled, though it possesses no venom. Known for being an excellent climber."
    },
    habitatDiet: {
      regions: ["India", "Pakistan", "Sri Lanka", "Nepal", "Southeast Asia"],
      environment:
        "Found in caves, stone piles, and heavily urbanized areas. It often hides in wall crevices, ceilings, and thatched roofs.",
      prey: "Primarily feeds on skinks, geckos, and small lizards."
    },
    identification: {
      color: "Grey, brown, or blackish-brown.",
      patterns:
        "White or yellowish crossbands that are broader at the sides and narrowest at the spine. Unlike the Krait, these bands usually begin near the neck.",
      eyes: "Small to medium eyes with vertically elliptical (slit-like) pupils.",
      scales:
        "Smooth, glossy scales. Notably lacks the enlarged hexagonal vertebral scales found on the Common Krait."
    },
    safety: {
      firstAid:
        "Wash the bite area with soap and water to prevent infection. While non-venomous, professional identification is recommended if there is any doubt regarding the species.",
      prevention:
        "Keep homes free of geckos and lizards (their primary food source) and seal cracks or crevices in walls."
    },
    mapData: {
      activeHotspots: ["South Asia", "Deccan Plateau", "Ganges Basin"]
    }
}

};

export default SNAKES_DATA;