
const root = document.getElementById('root');

fetch('http://localhost:8000/plants')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);
    return res.text(); // Get raw text first to debug
  })
  .then((text) => {
    console.log('Raw response:', text);
    try {
      const plants = JSON.parse(text);
      root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1>' + plants.map(p => `<p>${p.emoji} ${p.name}</p>`).join('');
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1><p>Error: Could not parse plant data</p><p>Raw response: ' + text + '</p>';
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
    root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1><p>Error: Could not fetch plant data</p><p>Details: ' + error.message + '</p>';
  });
