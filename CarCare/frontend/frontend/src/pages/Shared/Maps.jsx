import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import CardImage1 from "../../assets/img/card-image-1.gif"; // Car Wash
import CardImage2 from "../../assets/img/card-image-2.gif"; // Mechanic Shop
import Bg from "../../assets/img/bg-building-1.webp";
import carWashIconUrl from "../../assets/img/car-wash-icon.png"; // Replace with your path
import mechanicIconUrl from "../../assets/img/mechanic-icon.png"; // Replace with your path

// Background style
const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// Define sample locations for car wash and mechanic shops
const locations = {
  carWash: [
    { lat: 13.0827, lng: 80.2707, name: 'Car Wash Shop 1', rating: 4.5 },
    { lat: 13.0734, lng: 80.2807, name: 'Car Wash Shop 2', rating: 4.2 },
    { lat: 13.1069, lng: 80.2107, name: 'Car Wash Shop 3', rating: 4.7 },
    { lat: 13.1127, lng: 80.3007, name: 'Car Wash Shop 4', rating: 4.0 },
    { lat: 13.1217, lng: 80.3107, name: 'Car Wash Shop 5', rating: 4.3 },
    { lat: 13.1390, lng: 80.3207, name: 'Car Wash Shop 6', rating: 4.6 }
  ],
  mechanic: [
    { lat: 13.1827, lng: 80.2307, name: 'Mechanic Shop 1', rating: 4.8 },
    { lat: 13.3734, lng: 80.2107, name: 'Mechanic Shop 2', rating: 4.4 },
    { lat: 13.1111, lng: 80.2107, name: 'Mechanic Shop 3', rating: 4.6 },
    { lat: 13.2127, lng: 80.3407, name: 'Mechanic Shop 4', rating: 4.2 },
    { lat: 13.3117, lng: 80.3107, name: 'Mechanic Shop 5', rating: 4.5 },
    { lat: 13.2390, lng: 80.3007, name: 'Mechanic Shop 6', rating: 4.7 }
  ]
};

// Custom icons
const carWashIcon = new L.Icon({
  iconUrl: carWashIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const mechanicIcon = new L.Icon({
  iconUrl: mechanicIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const Card = ({ image, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`transition-transform transform ${isActive ? 'scale-105 translate-z-10 z-30' : 'scale-100'} 
               bg-white p-4 rounded-full shadow-md cursor-pointer hover:scale-105 hover:shadow-lg 
               ${isActive ? 'relative' : ''}`}
    style={{ 
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100px',  // Set width to match logo size
      height: '100px', // Set height to logo size
    }}
  />
);

const Map = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the Leaflet map
    const initialMap = L.map('map').setView([13.0827, 80.2707], 10);

    // Add Apple Maps tile layer
    L.tileLayer('https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.stamen.com">Stamen Design</a> | Map tiles &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(initialMap);

    setMap(initialMap);

    return () => {
      initialMap.remove();
    };
  }, []);

  useEffect(() => {
    if (map) {
      // Clear existing markers
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Determine which markers to display based on the active card
      const categoriesToDisplay = activeCard === null ? ['carWash', 'mechanic'] : [activeCard === 1 ? 'carWash' : 'mechanic'];
      
      categoriesToDisplay.forEach(category => {
        const newLocations = locations[category];
        const icon = category === 'carWash' ? carWashIcon : mechanicIcon;

        newLocations.forEach(location => {
          const { lat, lng, name, rating } = location;

          // Create a custom popup with shop details
          const popupContent = `
            <div>
              <h3>${name}</h3>
              <p>${'⭐'.repeat(Math.round(rating))} (${rating})</p>
            </div>
          `;

          L.marker([lat, lng], { icon })
            .addTo(map)
            .bindPopup(popupContent)
            .openPopup();
        });
      });

      // Optionally, set the view to the center of the markers or a default location
      const allLocations = [...locations.carWash, ...locations.mechanic];
      if (allLocations.length > 0) {
        const centerLat = allLocations.reduce((sum, loc) => sum + loc.lat, 0) / allLocations.length;
        const centerLng = allLocations.reduce((sum, loc) => sum + loc.lng, 0) / allLocations.length;
        map.setView([centerLat, centerLng], 13); // Adjust zoom level
      }
    }
  }, [map, activeCard]);

  return (
    <section style={bgImage} className="text-gray-600 body-font relative">
      {/* Navbar */}
      <Navbar />

      {/* Map Section */}
      <div
        id="map"
        className="relative border border-gray-400 rounded-lg overflow-hidden"
        style={{ height: '500px' }} // Adjust height as needed
      ></div>

      {/* Cards Section */}
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.0,
          duration: 0.4,
        }} 
        className="absolute top-1/3 left-8 transform -translate-y-1/2 space-y-4 z-10 mt-10"
      >
        <Card 
          image={CardImage1} 
          isActive={activeCard === 1} 
          onClick={() => setActiveCard(1)} 
        />
        <Card 
          image={CardImage2} 
          isActive={activeCard === 2} 
          onClick={() => setActiveCard(2)} 
        />
      </motion.div>
      <Footer />
    </section>
  );
};

export default Map;
