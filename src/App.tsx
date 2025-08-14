import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PlantList } from '@/pages/PlantList';
import { PlantDetail } from '@/pages/PlantDetail';
import { Plant } from '@/features/plants/types/plant';

/**
 * Main App component with routing
 */
const App: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const handlePlantSelect = (plant: Plant): void => {
    setSelectedPlant(plant);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🌿</div>
                <h1 className="text-2xl font-bold text-gray-900">Pocket Plants</h1>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Discover Plants
                </a>
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  My Garden
                </a>
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Growing Tips
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <PlantList onPlantSelect={handlePlantSelect} />
              } 
            />
            <Route 
              path="/plants/:plantId" 
              element={<PlantDetail />} 
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center text-gray-600">
              <p>🌱 Made with love for gardeners everywhere</p>
              <p className="mt-2 text-sm">
                Pocket Plants helps you discover what to grow right now in your area
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
