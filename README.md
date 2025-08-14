# 🌿 Pocket Plants Frontend

A delightful web application that helps you discover what plants are in season and ready to grow in your area. Built with modern web technologies and a focus on user experience.

## ✨ Features

- **Location-based Planting Recommendations**: Get personalized plant suggestions based on your location
- **Seasonal Guidance**: Discover what's ready to plant right now in your area
- **Plant Information**: Learn about planting windows, harvest times, and growing tips
- **Beautiful UI**: Clean, plant-themed interface with seasonal colors and emojis

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pocket-plants-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8000`

## 🛠️ Tech Stack

- **Frontend Framework**: Vanilla JavaScript with Vite
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS (ready for Tailwind CSS integration)
- **Backend Integration**: RESTful API calls to local backend server

## 📁 Project Structure

```
pocket-plants-frontend/
├── index.html          # Main HTML entry point
├── main.js            # JavaScript application logic
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
├── public/            # Static assets
└── roadmap.md         # Development roadmap and MVP plan
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server on port 8000
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend Integration

The frontend expects a backend server running on a different port (e.g., `http://localhost:3000`) with the following endpoint:
- `GET /plants` - Returns an array of plant objects with emoji and name properties

## 🎯 MVP Roadmap

### Phase 1: Core Planting Lookup ✅
- [x] Basic project setup with Vite
- [x] Plant data fetching from backend
- [x] Simple plant display interface

### Phase 2: Enhanced User Experience 🚧
- [ ] Location input (zip code or city)
- [ ] Seasonal planting recommendations
- [ ] Plant filtering (easy to grow, container gardening, etc.)
- [ ] Plant favoriting system

### Phase 3: Data Layer 🚧
- [ ] USDA Plant Hardiness Zones integration
- [ ] Seasonal planting data by region
- [ ] Expandable plant database

### Phase 4: Virtual Garden (Future) 🌱
- [ ] Virtual garden planting
- [ ] Growth phase timers
- [ ] Plant logging and tracking

## 🎨 Design Philosophy

- **Seasonal Colors**: Use nature-inspired color palettes that change with seasons
- **Plant Emojis**: Incorporate plant and nature emojis for a delightful experience
- **Soft UI**: Gentle, approachable interface design
- **Mobile-First**: Responsive design that works on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌱 About Pocket Plants

Pocket Plants aims to make gardening accessible and enjoyable for everyone. Whether you're a seasoned gardener or just starting out, our app helps you discover what you can grow right now in your area, making the most of each growing season.

---

**Happy Planting! 🌿✨**
