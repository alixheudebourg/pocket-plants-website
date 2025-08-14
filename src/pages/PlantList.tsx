import React, { useState } from 'react';
import { PlantCard } from '@/features/plants/components/PlantCard';
import { usePlants } from '@/features/plants/hooks/usePlants';
import { Plant, PlantCategory, DifficultyLevel } from '@/features/plants/types/plant';

interface PlantListProps {
  onPlantSelect?: (plant: Plant) => void;
}

/**
 * PlantList page component
 */
export const PlantList: React.FC<PlantListProps> = ({ onPlantSelect }) => {
  const {
    plants,
    loading,
    error,
    searchPlants,
    getPlantsByCategory,
    getPlantsByDifficulty,
    clearError
  } = usePlants();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory | ''>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | ''>('');

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    searchPlants(searchQuery);
  };

  const handleCategoryChange = (category: PlantCategory | ''): void => {
    setSelectedCategory(category);
    setSelectedDifficulty(''); // Reset difficulty when category changes
    if (category) {
      getPlantsByCategory(category);
    } else {
      // Reset to all plants
      searchPlants('');
    }
  };

  const handleDifficultyChange = (difficulty: DifficultyLevel | ''): void => {
    setSelectedDifficulty(difficulty);
    setSelectedCategory(''); // Reset category when difficulty changes
    if (difficulty) {
      getPlantsByDifficulty(difficulty);
    } else {
      // Reset to all plants
      searchPlants('');
    }
  };

  const handlePlantClick = (plant: Plant): void => {
    onPlantSelect?.(plant);
  };

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Plants</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={clearError}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🌿 Discover Your Perfect Plants</h1>
        <p className="text-lg text-gray-600">
          Find plants that thrive in your area and match your gardening experience
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search plants by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Category Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <button
              onClick={() => handleCategoryChange('')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                !selectedCategory
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {(['vegetables', 'herbs', 'fruits', 'flowers', 'succulents'] as const).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Difficulty Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Difficulty:</span>
            <button
              onClick={() => handleDifficultyChange('')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                !selectedDifficulty
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {(['easy', 'medium', 'hard'] as const).map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => handleDifficultyChange(difficulty)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedDifficulty === difficulty
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {loading ? 'Loading plants...' : `Found ${plants.length} plant${plants.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Plants Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64"></div>
            </div>
          ))}
        </div>
      ) : plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onClick={handlePlantClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Plants Found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filters to find more plants.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('');
              setSelectedDifficulty('');
              searchPlants('');
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
