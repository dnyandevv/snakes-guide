export default DATA_TWO;
const DATA_TWO = {
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
    headerImage: "/main/cobra-header.png",
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
}