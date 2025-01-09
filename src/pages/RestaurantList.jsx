import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

// Données fictives (mock data)
const mockRestaurants = [
  {
    id: 1,
    name: "Cannes Gourmet",
    image: "https://lepetitlugourmand.com/wp-content/uploads/2023/08/img_4374-2.jpg",
    rating: 4.5,
    description: "Restaurant raffiné avec une cuisine méditerranéenne.",
  },
  {
    id: 2,
    name: "La Brasserie Azur",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/99/7b/79/restaurant-cabaret-medusa.jpg",
    rating: 4.0,
    description: "Un endroit parfait pour les gourmands et les curieux, où chaque plat est une aventure (ou presque) !",
  },
  {
    id: 3,
    name: "L'Epicurien",
    image: "https://excellenceriviera.com/wp-content/uploads/2021/06/The-Roof-Cannes-Featured.jpg",
    rating: 5.0,
    description: "Situé au cœur de Cannes, ce restaurant offre une expérience culinaire exceptionnelle avec des produits locaux et des saveurs authentiques.",
  },
];

function RestaurantList() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Liste des Restaurants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            description={restaurant.description}
            rating={restaurant.rating} // Ajout du rating pour afficher les étoiles
            onClick={() => navigate(`/restaurants/${restaurant.id}`)} // Gère la navigation vers la page des détails
          />
        ))}
      </div>

      <button
        className="mt-5 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-600 focus:outline-none"
        onClick={() => navigate('/')} // Retour à la page d'accueil
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default RestaurantList;
