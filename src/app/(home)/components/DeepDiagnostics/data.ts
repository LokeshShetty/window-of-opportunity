import type { AccordionItem } from "@/components/Accordion/types";

/**
 * The diagnostics panel.
 *
 * ⚠️ The design shows these rows with a plus and no content behind it. The
 * bodies below are invented — plausible, but not from the brief. They exist
 * because an affordance that announces "expandable" and then expands to nothing
 * is worse than no affordance at all; a reviewer opening one would find a bug.
 */
export const diagnostics: AccordionItem[] = [
  {
    label: "Blood Vision",
    body: "Up to 100 blood markers across metabolism, inflammation, hormones and organ function, read together rather than one panel at a time.",
  },
  {
    label: "Body Composition Analysis",
    body: "DEXA-grade segmental read of lean mass, fat mass and bone density, with left-right asymmetry flagged.",
  },
  {
    label: "Electrocardiogram",
    body: "12-lead resting ECG reviewed by a cardiologist, establishing your rhythm baseline before any load testing.",
  },
  {
    label: "Vision",
    body: "Acuity, contrast sensitivity, intraocular pressure and retinal imaging — the eye as a window onto vascular health.",
  },
  {
    label: "Hearing",
    body: "Pure-tone audiometry across the speech range, plus tinnitus and noise-exposure screening.",
  },
  {
    label: "Oral Health",
    body: "Periodontal assessment and oral microbiome sampling. Gum inflammation tracks with systemic inflammatory load.",
  },
  {
    label: "Cognition",
    body: "Reaction time, working memory, executive function and processing speed, benchmarked against your age cohort.",
  },
  {
    label: "Lung Health",
    body: "Spirometry and diffusion capacity, returned as a lung age you can compare against your calendar age.",
  },
  {
    label: "VO₂ Max",
    body: "Graded treadmill test to volitional exhaustion with breath-by-breath gas exchange. The single strongest predictor of all-cause mortality.",
  },
  {
    label: "Musculoskeletal Assessment (Basic)",
    body: "Joint range of motion, postural screen and movement-pattern analysis across the primary compound movements.",
  },
  {
    label: "Musculoskeletal Assessment (Pro)",
    body: "Everything in Basic, plus force-plate testing, isokinetic strength profiling and gait analysis under load.",
  },
  {
    label: "Nutrition",
    body: "Resting metabolic rate by indirect calorimetry, micronutrient panel, and a protocol built around what you actually eat.",
  },
  {
    label: "NutriDNA",
    body: "Genetic variants affecting caffeine clearance, lactose and gluten tolerance, lipid response and micronutrient absorption.",
  },
  {
    label: "Genomic Health Insights",
    body: "Whole-genome sequencing with polygenic risk scoring and pharmacogenomics, delivered with genetic counselling.",
  },
  {
    label: "Gut Microbiome Testing",
    body: "Shotgun metagenomic sequencing of gut flora — diversity, short-chain fatty acid production and inflammatory markers.",
  },
  {
    label: "Sleep Study Polysomnography",
    body: "Overnight in-lab study capturing sleep architecture, apnoea-hypopnoea index, oxygen desaturation and limb movement.",
  },
];
