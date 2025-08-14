import { Plant, PlantCategory, DifficultyLevel } from '../types/plant';

const API_BASE_URL = 'http://localhost:3000';

/**
 * Plant service for API calls and data management
 */
export class PlantService {
  /**
   * Fetch all plants from the API
   * @returns Promise<Plant[]> Array of plants
   */
  static async getAllPlants(): Promise<Plant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching plants:', error);
      throw error;
    }
  }

  /**
   * Fetch a single plant by ID
   * @param plantId Plant ID
   * @returns Promise<Plant> Plant object
   */
  static async getPlantById(plantId: string): Promise<Plant> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants/${plantId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching plant ${plantId}:`, error);
      throw error;
    }
  }

  /**
   * Get plants by category
   * @param category Plant category
   * @returns Promise<Plant[]> Array of plants in category
   */
  static async getPlantsByCategory(category: PlantCategory): Promise<Plant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants?category=${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching plants by category ${category}:`, error);
      throw error;
    }
  }

  /**
   * Get plants by difficulty level
   * @param difficulty Difficulty level
   * @returns Promise<Plant[]> Array of plants with difficulty
   */
  static async getPlantsByDifficulty(difficulty: DifficultyLevel): Promise<Plant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants?difficulty=${difficulty}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching plants by difficulty ${difficulty}:`, error);
      throw error;
    }
  }

  /**
   * Search plants by name or description
   * @param query Search query
   * @returns Promise<Plant[]> Array of matching plants
   */
  static async searchPlants(query: string): Promise<Plant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error searching plants with query "${query}":`, error);
      throw error;
    }
  }

  /**
   * Get seasonal plants for a specific month and location
   * @param month Month (1-12)
   * @param location Location (zip code or city)
   * @returns Promise<Plant[]> Array of seasonal plants
   */
  static async getSeasonalPlants(month: number, location: string): Promise<Plant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/plants/seasonal?month=${month}&location=${encodeURIComponent(location)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching seasonal plants for month ${month} in ${location}:`, error);
      throw error;
    }
  }
}
