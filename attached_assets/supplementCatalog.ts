/**
 * Catalog of natural dietary supplements
 * This file contains data on supplements, their properties and benefits
 */

// Interface to define the structure of a dietary supplement
export interface SupplementInfo {
  name: string;
  description: string;
  category: string;
  benefits: string[];
  scientificBasis: string;
  recommendedDosage: string;
  timeToEffect: string;
  naturalSources: string[];
  efficacyScore: number;
  cautions?: string;
  compatibleDiets: string[];
  targetSymptoms: string[];
  targetGoals: string[];
  categories: string[];
  relatedTerms: string[];
}

// Catalog of dietary supplements
const SUPPLEMENT_CATALOG: Record<string, SupplementInfo> = {
  "magnesium_glycinate": {
    name: "Marine Magnesium",
    description: "Helps reduce fatigue and supports the nervous and muscular systems",
    category: "Minerals",
    benefits: [
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Helps maintain normal muscle functions",
      "Contributes to electrolyte balance"
    ],
    scientificBasis: "Clinical studies show that magnesium plays a crucial role in more than 300 enzymatic reactions in the body",
    recommendedDosage: "300-400 mg per day",
    timeToEffect: "2-3 weeks",
    naturalSources: ["Nuts", "Green vegetables", "Whole grains", "Dark chocolate"],
    efficacyScore: 90,
    cautions: "May have a laxative effect at high doses",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Stress", "Anxiety", "Sleep disorders", "Joint pain"],
    targetGoals: ["More energy", "Reduce my stress", "Better sleep"],
    categories: ["minerals", "sleep", "stress", "energy"],
    relatedTerms: ["magnesium", "electrolytes", "muscle function"]
  },
  
  "vitamin_b_complex": {
    name: "Vitamin B Complex",
    description: "Supports energy metabolism and helps reduce fatigue",
    category: "Vitamins",
    benefits: [
      "Contributes to normal energy metabolism",
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Contributes to normal psychological functions"
    ],
    scientificBasis: "B vitamins are essential for converting nutrients into energy at the cellular level",
    recommendedDosage: "According to individual needs, generally 1 tablet per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Whole grains", "Legumes", "Nutritional yeast", "Meats", "Eggs"],
    efficacyScore: 85,
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian"],
    targetSymptoms: ["Fatigue", "Lack of concentration", "Stress", "Anxiety"],
    targetGoals: ["More energy", "Improve my concentration", "Reduce my stress"],
    categories: ["vitamins", "energy", "cognitive"],
    relatedTerms: ["metabolism", "b vitamins", "energy"]
  },
  
  "vitamin_b12": {
    name: "Natural Vitamin B12",
    description: "Essential for energy, nervous system and red blood cell formation",
    category: "Vitamins",
    benefits: [
      "Contributes to normal energy metabolism",
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Contributes to normal red blood cell formation"
    ],
    scientificBasis: "Vitamin B12 is necessary for DNA synthesis, red blood cell formation, and maintenance of the myelin sheath",
    recommendedDosage: "1000-2000 μg per week or 250 μg per day",
    timeToEffect: "4-12 weeks",
    naturalSources: ["Meats", "Fish", "Seafood", "Eggs", "Dairy products", "Fortified nutritional yeast"],
    efficacyScore: 95,
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Lack of concentration", "Cold sensitivity"],
    targetGoals: ["More energy", "Improve my concentration"],
    categories: ["vitamins", "energy", "vegan-essential"],
    relatedTerms: ["cobalamin", "methylcobalamin", "red blood cells"]
  },
  
  "vitamin_d3": {
    name: "Natural Vitamin D3",
    description: "Supports the immune system and contributes to bone health",
    category: "Vitamins",
    benefits: [
      "Contributes to the maintenance of normal bones",
      "Supports the immune system",
      "Helps with calcium absorption",
      "Contributes to the maintenance of normal muscle function"
    ],
    scientificBasis: "Studies show that vitamin D supplementation can reduce the risk of respiratory infections by 30% in deficient individuals",
    recommendedDosage: "1000-2000 IU per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Sun exposure", "Fatty fish", "Egg yolk"],
    efficacyScore: 85,
    cautions: "Consult a professional for high dosages",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian"],
    targetSymptoms: ["Fatigue", "Cold sensitivity", "Joint pain"],
    targetGoals: ["More energy", "Strengthen my immunity"],
    categories: ["vitamins", "immune", "bone-health"],
    relatedTerms: ["sunshine vitamin", "calcium absorption", "cholecalciferol"]
  },
  
  "vitamin_d_vegan": {
    name: "Plant-based Vitamin D3",
    description: "Vegan version of vitamin D, extracted from lichen, supports immunity and bone health",
    category: "Vitamins",
    benefits: [
      "Contributes to the maintenance of normal bones",
      "Supports the immune system",
      "Helps with calcium absorption",
      "Contributes to the maintenance of normal muscle function"
    ],
    scientificBasis: "Plant-based vitamin D3 (lichen) has shown bioavailability comparable to animal-derived sources",
    recommendedDosage: "1000-2000 IU per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Sun exposure", "Lichen"],
    efficacyScore: 80,
    cautions: "Consult a professional for high dosages",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Cold sensitivity", "Joint pain"],
    targetGoals: ["More energy", "Strengthen my immunity"],
    categories: ["vitamins", "immune", "bone-health", "vegan-friendly"],
    relatedTerms: ["lichen-derived", "plant-based", "cholecalciferol"]
  },
  
  "vitamin_c": {
    name: "Natural Vitamin C",
    description: "Powerful antioxidant that supports the immune system and collagen production",
    category: "Vitamins",
    benefits: [
      "Helps reduce fatigue",
      "Supports the immune system",
      "Helps protect cells against oxidative stress",
      "Improves iron absorption"
    ],
    scientificBasis: "Vitamin C is essential for collagen synthesis and acts as a powerful antioxidant in the body",
    recommendedDosage: "500-1000 mg per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Citrus fruits", "Kiwi", "Berries", "Bell peppers", "Broccoli"],
    efficacyScore: 80,
    cautions: "May cause digestive issues at high doses",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Skin problems"],
    targetGoals: ["More energy", "Strengthen my immunity", "Improve my skin"],
    categories: ["vitamins", "immune", "skin-health", "antioxidant"],
    relatedTerms: ["ascorbic acid", "collagen", "antioxidant"]
  },
  
  "zinc": {
    name: "Natural Zinc",
    description: "Essential mineral for immunity, skin health, and cognitive function",
    category: "Minerals",
    benefits: [
      "Supports the immune system",
      "Contributes to the maintenance of normal skin",
      "Helps protect cells against oxidative stress",
      "Contributes to the maintenance of normal cognitive function"
    ],
    scientificBasis: "Zinc is involved in more than 300 enzymatic reactions and plays a crucial role in cell division and tissue repair",
    recommendedDosage: "15-30 mg per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Oysters", "Red meat", "Pumpkin seeds", "Legumes"],
    efficacyScore: 75,
    cautions: "High doses may interfere with copper absorption",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Skin problems", "Brittle hair/nails"],
    targetGoals: ["Strengthen my immunity", "Improve my skin"],
    categories: ["minerals", "immune", "skin-health"],
    relatedTerms: ["trace mineral", "immunity", "enzyme cofactor"]
  },
  
  "iron": {
    name: "Natural Iron",
    description: "Essential mineral for oxygen transport and energy production",
    category: "Minerals",
    benefits: [
      "Helps reduce fatigue",
      "Aids in normal red blood cell formation",
      "Supports normal oxygen transport in the body",
      "Contributes to normal cognitive function"
    ],
    scientificBasis: "Iron is an essential component of hemoglobin, responsible for transporting oxygen from the lungs to tissues",
    recommendedDosage: "14-18 mg per day (women), 8-10 mg per day (men)",
    timeToEffect: "4-12 weeks",
    naturalSources: ["Red meat", "Legumes", "Spinach", "Pumpkin seeds"],
    efficacyScore: 85,
    cautions: "May cause digestive issues, do not take without confirmed deficiency",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Cold sensitivity"],
    targetGoals: ["More energy"],
    categories: ["minerals", "energy", "blood-health"],
    relatedTerms: ["hemoglobin", "ferritin", "anemia"]
  },
  
  "omega3": {
    name: "Omega-3 (EPA/DHA)",
    description: "Essential fatty acids for cardiovascular and brain health",
    category: "Essential fatty acids",
    benefits: [
      "Supports cardiovascular health",
      "Contributes to normal brain function",
      "Helps maintain normal vision",
      "Natural anti-inflammatory properties"
    ],
    scientificBasis: "Omega-3s are polyunsaturated fatty acids that modulate inflammation and are structural components of cell membranes",
    recommendedDosage: "1000-2000 mg per day (including 500 mg of EPA/DHA)",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Fatty fish (salmon, mackerel, sardines)", "Marine algae"],
    efficacyScore: 80,
    cautions: "Consult a doctor if on anticoagulants",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian"],
    targetSymptoms: ["Joint pain", "Lack of concentration", "Mood swings"],
    targetGoals: ["Improve my concentration", "Reduce my stress"],
    categories: ["essential-fatty-acids", "brain-health", "heart-health", "anti-inflammatory"],
    relatedTerms: ["EPA", "DHA", "fish oil"]
  },
  
  "omega3_vegan": {
    name: "Plant-based Omega-3 (ALA)",
    description: "Plant-based version of essential fatty acids, mainly in ALA form",
    category: "Essential fatty acids",
    benefits: [
      "Supports cardiovascular health",
      "Contributes to maintaining normal cholesterol levels",
      "Natural anti-inflammatory properties"
    ],
    scientificBasis: "ALA (alpha-linolenic acid) can be partially converted to EPA and DHA in the body, but with a limited conversion rate",
    recommendedDosage: "2000-4000 mg per day",
    timeToEffect: "8-12 weeks",
    naturalSources: ["Flaxseeds", "Chia seeds", "Walnuts", "Canola oil"],
    efficacyScore: 65,
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Joint pain", "Mood swings"],
    targetGoals: ["Reduce my stress"],
    categories: ["essential-fatty-acids", "heart-health", "vegan-friendly"],
    relatedTerms: ["ALA", "flaxseed", "plant-based omega"]
  },
  
  "probiotics": {
    name: "Multi-strain Probiotics",
    description: "Beneficial bacteria that support gut flora balance",
    category: "Probiotics",
    benefits: [
      "Supports gut flora balance",
      "Helps maintain healthy digestion",
      "Contributes to strengthening the immune system",
      "Can improve skin appearance"
    ],
    scientificBasis: "Probiotics modulate the gut microbiome and positively influence immunity and digestion",
    recommendedDosage: "5-10 billion CFU per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Yogurt", "Kefir", "Sauerkraut", "Kimchi", "Kombucha"],
    efficacyScore: 85,
    cautions: "Consult a doctor if you have a weakened immune system",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Digestive problems", "Skin problems", "Cravings"],
    targetGoals: ["Support my digestion", "Strengthen my immunity", "Improve my skin"],
    categories: ["gut-health", "immune", "digestive"],
    relatedTerms: ["microbiome", "gut bacteria", "lactobacillus"]
  },
  
  "prebiotics": {
    name: "Prebiotic Fibers",
    description: "Nourish beneficial gut bacteria for better digestive health",
    category: "Prebiotics",
    benefits: [
      "Nourishes good gut bacteria",
      "Promotes healthy digestion",
      "Helps regulate appetite",
      "Contributes to glycemic balance"
    ],
    scientificBasis: "Prebiotics are non-digestible fibers that serve as substrate for beneficial gut bacteria",
    recommendedDosage: "5-10 g per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Chicory", "Jerusalem artichoke", "Onion", "Garlic", "Green banana", "Oats"],
    efficacyScore: 80,
    cautions: "Introduce gradually to avoid bloating",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Digestive problems", "Cravings"],
    targetGoals: ["Support my digestion", "Balance my weight"],
    categories: ["gut-health", "digestive", "fiber"],
    relatedTerms: ["inulin", "FOS", "GOS"]
  },
  
  "ashwagandha": {
    name: "Ashwagandha",
    description: "Adaptogenic plant that helps reduce stress and supports hormonal balance",
    category: "Adaptogenic plants",
    benefits: [
      "Helps reduce stress and anxiety",
      "Supports hormonal balance",
      "Contributes to improving sleep quality",
      "Helps maintain energy and vitality"
    ],
    scientificBasis: "Ashwagandha has demonstrated modulatory effects on cortisol levels and neurotransmitter activity",
    recommendedDosage: "300-500 mg per day (standardized extract)",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Ashwagandha root"],
    efficacyScore: 85,
    cautions: "Not recommended for autoimmune diseases or pregnancy",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Stress", "Anxiety", "Sleep disorders", "Fatigue"],
    targetGoals: ["Reduce my stress", "Better sleep", "More energy"],
    categories: ["adaptogen", "stress", "sleep", "hormonal-balance"],
    relatedTerms: ["withania somnifera", "adaptogen", "stress relief"]
  },
  
  "rhodiola": {
    name: "Rhodiola Rosea",
    description: "Adaptogenic plant that fights fatigue and improves cognitive performance",
    category: "Adaptogenic plants",
    benefits: [
      "Helps combat physical and mental fatigue",
      "Supports cognitive performance under stress",
      "Contributes to normal energy metabolism",
      "Helps the body adapt to stress"
    ],
    scientificBasis: "Rhodiola contains active compounds that modulate stress hormones and improve cellular energy production",
    recommendedDosage: "200-400 mg per day (standardized extract)",
    timeToEffect: "1-3 weeks",
    naturalSources: ["Rhodiola rosea root"],
    efficacyScore: 80,
    cautions: "May interact with certain medications, consult a doctor if on antidepressants",
    compatibleDiets: ["Omnivore", "Flexitarian", "Pescatarian", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Stress", "Lack of concentration"],
    targetGoals: ["More energy", "Reduce my stress", "Improve my concentration"],
    categories: ["adaptogen", "energy", "cognitive", "stress"],
    relatedTerms: ["arctic root", "golden root", "adaptogen"]
  }
};

export default SUPPLEMENT_CATALOG;
