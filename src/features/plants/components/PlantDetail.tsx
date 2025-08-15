import React from 'react';
import { Plant } from '../types/plant';

interface PlantDetailProps {
  plant: Plant | null;
  onBack: () => void;
  loading?: boolean;
}

/**
 * PlantDetail component - Product Description Page (PDP)
 */
export const PlantDetail: React.FC<PlantDetailProps> = ({ 
  plant, 
  onBack, 
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plant Not Found</h2>
        <p className="text-gray-600 mb-6">The plant you're looking for doesn't exist.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          ← Back to Plants
        </button>
      </div>
    );
  }

  const {
    name,
    emoji,
    category,
    difficulty,
    notes,
    seasons,
    growingTime,
    sunlight,
    water,
    soil,
    images,
    careLevel,
    companions,
    pests,
    avoid
  } = plant;

  const getDifficultyColor = (diff: string): string => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyText = (diff: string): string => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'Easy';
      case 'medium': return 'Medium';
      case 'hard': return 'Hard';
      default: return 'Unknown';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Plants
        </button>
        
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${getDifficultyColor(difficulty)}
        `}>
          {getDifficultyText(difficulty)} to Grow
        </span>
      </div>

      {/* Plant Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="text-6xl">{emoji || '🌱'}</div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
          {category && (
            <p className="text-lg text-gray-600 capitalize mb-2">
              {category}
            </p>
          )}
          {notes && (
            <p className="text-gray-700 text-lg leading-relaxed">
              {notes}
            </p>
          )}
        </div>
      </div>

      {/* Plant Images */}
      {images && images.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Plant Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image: {image}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Growing Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Growing Requirements */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Growing Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sunlight && (
                <div>
                  <span className="font-medium text-gray-700">Sunlight:</span>
                  <p className="text-gray-600">{sunlight}</p>
                </div>
              )}
              {water && (
                <div>
                  <span className="font-medium text-gray-700">Water:</span>
                  <p className="text-gray-600">{water}</p>
                </div>
              )}
              {growingTime && (
                <div>
                  <span className="font-medium text-gray-700">Growing Time:</span>
                  <p className="text-gray-600">{growingTime}</p>
                </div>
              )}
              {seasons && seasons.length > 0 && (
                <div>
                  <span className="font-medium text-gray-700">Growing Seasons:</span>
                  <p className="text-gray-600">{seasons.join(', ')}</p>
                </div>
              )}
              {plant.planting && (
                <div>
                  <span className="font-medium text-gray-700">Planting Time:</span>
                  <p className="text-gray-600">{plant.planting}</p>
                </div>
              )}
              {plant.harvest && (
                <div>
                  <span className="font-medium text-gray-700">Harvest Time:</span>
                  <p className="text-gray-600">{plant.harvest}</p>
                </div>
              )}
              {plant.biomes && plant.biomes.length > 0 && (
                <div>
                  <span className="font-medium text-gray-700">Hardiness Zones:</span>
                  <p className="text-gray-600">{plant.biomes.join(', ')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Soil Requirements */}
          {soil && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Soil Requirements</h3>
              <p className="text-gray-700">{soil}</p>
            </div>
          )}

          {/* Care Level */}
          {careLevel && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Level</h3>
              <p className="text-gray-700 capitalize">{careLevel}</p>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Companion Plants */}
          {companions && companions.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Companion Plants</h3>
              <div className="space-y-2">
                {companions.map((companion: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">🌿</span>
                    {companion}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pests to Watch For */}
          {pests && pests.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pests to Watch For</h3>
              <div className="space-y-2">
                {pests.map((pest: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-red-500 mr-2">🐛</span>
                    {pest}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plants to Avoid */}
          {avoid && avoid.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Plants to Avoid</h3>
              <div className="space-y-2">
                {avoid.map((plant: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">⚠️</span>
                    {plant}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                🌱 Add to My Garden
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                📅 Set Planting Reminder
              </button>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                ❤️ Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
