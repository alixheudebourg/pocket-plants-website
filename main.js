
const root = document.getElementById('root');

fetch('http://localhost:8000/plants')
  .then((res) => res.json())
  .then((plants) => {
    root.innerHTML = '<h1>🌿 Welcome to Pocket Plants</h1>' + plants.map(p => `<p>${p.emoji} ${p.name}</p>`).join('');
  });
