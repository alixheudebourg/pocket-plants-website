
const root = document.getElementById('root');

// Show loading state
root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1><p>Loading plants...</p>';

// Test if we can reach the backend
console.log('Attempting to fetch from:', 'http://localhost:3000/plants');

fetch('http://localhost:3000/plants')
  .then((res) => {
    console.log('Response received:', res);
    console.log('Response status:', res.status);
    console.log('Response ok:', res.ok);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
    }
    
    return res.text(); // Get raw text first to debug
  })
  .then((text) => {
    console.log('Raw response text:', text);
    console.log('Response length:', text.length);
    
    if (!text || text.trim() === '') {
      throw new Error('Empty response from server');
    }
    
    try {
      const plants = JSON.parse(text);
      console.log('Parsed plants:', plants);
      
      if (Array.isArray(plants) && plants.length > 0) {
        root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1>' + 
          plants.map(p => `<p>${p.emoji || '🌱'} ${p.name || 'Unknown Plant'}</p>`).join('');
      } else {
        root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1><p>No plants found</p>';
      }
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1>' +
        '<p>Error: Could not parse plant data</p>' +
        '<p>Raw response: ' + text.substring(0, 200) + '...</p>';
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
    root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1>' +
      '<p>Error: Could not fetch plant data</p>' +
      '<p>Details: ' + error.message + '</p>' +
      '<p>Make sure your backend is running on port 8000</p>';
  });
