import React from "react";

function RestaurantCard({ name, description, rating, image, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 pb-12"> {/* Ajout d'un padding supplémentaire pour laisser de l'espace pour le bouton */}
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-yellow-500 text-sm">
          {Array(Math.round(rating))
            .fill("★")
            .join("")}
          {Array(5 - Math.round(rating))
            .fill("☆")
            .join("")}
        </p>
      </div>
      {/* Bouton positionné en bas à gauche */}
      <button
        className="absolute bottom-2 left-4 bg-gradient-to-r from-red-200 to-yellow-200 text-center text-gray-800 px-4 py-2 rounded hover:from-gray-400 hover:to-gray-600"
        onClick={onClick}
      >
        Détails
      </button>
    </div>
  );
}

export default RestaurantCard;
