import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlantDetail as PlantDetailComponent } from '@/features/plants/components/PlantDetail';
import { usePlants } from '@/features/plants/hooks/usePlants';

/**
 * PlantDetail page component - handles routing and data fetching
 */
export const PlantDetail: React.FC = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const navigate = useNavigate();
  const { selectedPlant, loading, error, fetchPlantById, clearError } = usePlants();

  useEffect(() => {
    if (plantId) {
      fetchPlantById(plantId);
    }
  }, [plantId, fetchPlantById]);

  const handleBack = (): void => {
    navigate('/');
  };

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Error Loading Plant</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <div className="space-x-4">
            <button
              onClick={clearError}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Plants
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PlantDetailComponent
      plant={selectedPlant}
      onBack={handleBack}
      loading={loading}
    />
  );
};
