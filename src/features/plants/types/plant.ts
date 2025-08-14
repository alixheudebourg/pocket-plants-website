/**
 * Plant type definitions
 */

export const PLANT_CATEGORIES = {
  VEGETABLES: 'vegetables',
  HERBS: 'herbs',
  FRUITS: 'fruits',
  FLOWERS: 'flowers',
  SUCCULENTS: 'succulents'
} as const;

export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
} as const;

export const GROWTH_PHASES = {
  SEED: 'seed',
  SEEDLING: 'seedling',
  VEGETATIVE: 'vegetative',
  FLOWERING: 'flowering',
  HARVEST: 'harvest'
} as const;

export type PlantCategory = typeof PLANT_CATEGORIES[keyof typeof PLANT_CATEGORIES];
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[keyof typeof DIFFICULTY_LEVELS];
export type GrowthPhase = typeof GROWTH_PHASES[keyof typeof GROWTH_PHASES];

export interface PlantingGuide {
  depth: string;
  spacing: string;
  soil: string;
  [key: string]: string;
}

export interface Plant {
  id: string;
  name: string;
  emoji: string;
  category: PlantCategory;
  difficulty: DifficultyLevel;
  description: string;
  growingSeasons: string[];
  daysToHarvest: number;
  sunlight: string;
  water: string;
  tips: string[];
  imageUrl?: string;
  plantingGuide?: PlantingGuide;
  companionPlants: string[];
  pests: string[];
}
