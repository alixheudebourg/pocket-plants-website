import { useState, useEffect, useCallback } from 'react';
import { PlantService } from '../services/plantService';
import { Plant, PlantCategory, DifficultyLevel } from '../types/plant';

interface UsePlantsReturn {
  // State
  plants: Plant[];
  loading: boolean;
  error: string | null;
  selectedPlant: Plant | null;
  
  // Actions
  fetchPlants: () => Promise<void>;
  fetchPlantById: (plantId: string) => Promise<void>;
  getPlantsByCategory: (category: PlantCategory) => Promise<void>;
  getPlantsByDifficulty: (difficulty: DifficultyLevel) => Promise<void>;
  searchPlants: (query: string) => Promise<void>;
  getSeasonalPlants: (month: number, location: string) => Promise<void>;
  clearError: () => void;
  clearSelectedPlant: () => void;
  
  // Computed
  hasPlants: boolean;
  plantCount: number;
}

/**
 * Custom hook for managing plant data
 * @returns UsePlantsReturn Plant data and functions
 */
export const usePlants = (): UsePlantsReturn => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  /**
   * Fetch all plants
   */
  const fetchPlants = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.getAllPlants();
      console.log('Plants fetched:', data); // Debug log
      console.log('Plants count:', data.length); // Debug log
      setPlants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Fetch a single plant by ID
   * @param plantId Plant ID
   */
  const fetchPlantById = useCallback(async (plantId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.getPlantById(plantId);
      setSelectedPlant(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Get plants by category
   * @param category Plant category
   */
  const getPlantsByCategory = useCallback(async (category: PlantCategory): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.getPlantsByCategory(category);
      setPlants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Get plants by difficulty
   * @param difficulty Difficulty level
   */
  const getPlantsByDifficulty = useCallback(async (difficulty: DifficultyLevel): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.getPlantsByDifficulty(difficulty);
      setPlants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Search plants
   * @param query Search query
   */
  const searchPlants = useCallback(async (query: string): Promise<void> => {
    if (!query.trim()) {
      await fetchPlants();
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.searchPlants(query);
      setPlants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [fetchPlants]);

  /**
   * Get seasonal plants
   * @param month Month (1-12)
   * @param location Location
   */
  const getSeasonalPlants = useCallback(async (month: number, location: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await PlantService.getSeasonalPlants(month, location);
      setPlants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clear error state
   */
  const clearError = useCallback((): void => {
    setError(null);
  }, []);

  /**
   * Clear selected plant
   */
  const clearSelectedPlant = useCallback((): void => {
    setSelectedPlant(null);
  }, []);

  // Load plants on mount
  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  return {
    // State
    plants,
    loading,
    error,
    selectedPlant,
    
    // Actions
    fetchPlants,
    fetchPlantById,
    getPlantsByCategory,
    getPlantsByDifficulty,
    searchPlants,
    getSeasonalPlants,
    clearError,
    clearSelectedPlant,
    
    // Computed
    hasPlants: plants.length > 0,
    plantCount: plants.length
  };
};
