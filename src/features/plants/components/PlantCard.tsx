import React from 'react';
import { Plant } from '../types/plant';

interface PlantCardProps {
  plant: Plant;
  onClick?: (plant: Plant) => void;
  isSelected?: boolean;
}

/**
 * PlantCard component for displaying plant information
 */
export const PlantCard: React.FC<PlantCardProps> = ({ 
  plant, 
  onClick, 
  isSelected = false 
}) => {
  const {
    name,
    emoji,
    category,
    difficulty,
    description,
    daysToHarvest,
    sunlight,
    water
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

  const handleClick = (): void => {
    onClick?.(plant);
  };

  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer
        border-2 ${isSelected ? 'border-green-500' : 'border-transparent'}
        p-4 max-w-sm
      `}
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-3xl">{emoji || '🌱'}</div>
        <span className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${getDifficultyColor(difficulty)}
        `}>
          {getDifficultyText(difficulty)}
        </span>
      </div>

      {/* Plant Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        
        {category && (
          <p className="text-sm text-gray-600 capitalize">
            Category: {category}
          </p>
        )}
        
        {description && (
          <p className="text-sm text-gray-700 line-clamp-2">
            {description}
          </p>
        )}

        {/* Growing Info */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {daysToHarvest && (
            <div className="text-xs text-gray-600">
              <span className="font-medium">Harvest:</span> {daysToHarvest} days
            </div>
          )}
          
          {sunlight && (
            <div className="text-xs text-gray-600">
              <span className="font-medium">Sun:</span> {sunlight}
            </div>
          )}
          
          {water && (
            <div className="text-xs text-gray-600">
              <span className="font-medium">Water:</span> {water}
            </div>
          )}
        </div>
      </div>

      {/* Click indicator */}
      <div className="mt-3 text-xs text-gray-400 text-center">
        Click to view details
      </div>
    </div>
  );
};
