import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const mockData = {
  1: {
    name: "Cannes Gourmet",
    image: "https://lepetitlugourmand.com/wp-content/uploads/2023/08/img_4374-2.jpg",
    specialite: [
      { name: "Pizza Margherita", price: "12€" },
      { name: "Pâtes Carbonara", price: "15€" },
      { name: "Tiramisu", price: "8€" },
    ],
    reviews: [
      { user: "Alice", comment: "Excellente cuisine !", rating: 5 },
      { user: "Bob", comment: "Service impeccable.", rating: 4 },
    ],
  },
  2: {
    name: "La Brasserie Azur",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/99/7b/79/restaurant-cabaret-medusa.jpg",
    specialite: [
      { name: "Burger Maison", price: "14€" },
      { name: "Salade César", price: "10€" },
    ],
    reviews: [
      { user: "Charlie", comment: "Belle ambiance.", rating: 4 },
    ],
  },
  3: {
    name: "L'Epicurien",
    image: "https://excellenceriviera.com/wp-content/uploads/2021/06/The-Roof-Cannes-Featured.jpg",
    specialite: [
      { name: "Soupe à l'oignon", price: "22€" },
      { name: "Tartare de boeuf", price: "26€" },
    ],
    reviews: [
      { user: "Pierre", comment: "Une cuisine raffinée", rating: 5 },
      { user: "Gaëlick", comment: "J'ai retrouvé les saveurs de la cuisine de ma grand-mère...", rating: 5 },
    ],
  },
};

function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleReservationClick = () => {
    if (isAuthenticated) {
      navigate(`/restaurants/${id}/reserver`);
    } else {
      alert("Vous devez être connecté pour réserver. Veuillez vous connecter ===>");
    }
  };
  
  const restaurant = mockData[id];

  if (!restaurant) {
    return <div>Restaurant non trouvé.</div>;
  }

  return (
    <div className="p-4">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-1">
          <h1 className="text-4xl font-playfair italic ml-4 mt-4 mb-4">« {restaurant.name} »</h1>
        </section>
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Spécialités</h2>
          <ul>
            {restaurant.specialite.map((item, index) => (
              <li key={index} className="mb-1">
                {item.name} - <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Avis</h2>
          <ul>
            {restaurant.reviews.map((review, index) => (
              <li key={index} className="mb-2">
                <p>
                  <span className="font-bold">{review.user}</span>: {review.comment}
                </p>
                <p>Évaluation : {review.rating} étoiles</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Conteneur pour les boutons */}
      <div className="flex justify-between items-center mt-4">

      {/* Bouton Réserver */}
        <button
        onClick={handleReservationClick}
        className="bg-gradient-to-r from-red-200 to-yellow-200 text-gray-800 py-2 px-4 rounded hover:from-gray-400 hover:to-gray-600"
        >
        Réserver
        </button>

      {/* Bouton Retour */}
        <button
        className="bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-600 focus:outline-none"
        onClick={() => navigate(-1)} // Retour à la page précédente
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
    </div>
  );
}

export default RestaurantDetails;
