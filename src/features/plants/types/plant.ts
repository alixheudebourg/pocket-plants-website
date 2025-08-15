/**
 * Plant type definitions
 */

export type PlantCategory = 'vegetables' | 'herbs' | 'fruits' | 'flowers' | 'succulents';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type GrowthPhase = 'seed' | 'seedling' | 'vegetative' | 'flowering' | 'harvest';

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
  // Backend uses different field names
  planting: string;
  harvest: string;
  growingTime: string;
  sunlight: string;
  water: string;
  soil: string;
  notes: string;
  biomes: string[];
  seasons: string[];
  images: string[];
  careLevel: string;
  pests: string[];
  companions: string[];
  avoid: string[];
}
