import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import du hook personnalisé
import logo from "../assets/logo.png";

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); // Accès à l'état et à la fonction logout

  const handleLogout = () => {
    logout(); // Appel de la fonction pour se déconnecter
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around items-center">
        <li className="mr-auto">
          <img
            src={logo}
            alt="Logo Les Tables Cannoises"
            className="w-12 h-12"
            style={{ width: "75px", height: "75px" }}
          />
        </li>
      </ul>
      <ul className="flex justify-around items-center">
        <li className="hover:underline">
          <Link to="/">Accueil</Link>
        </li>
        <li className="hover:underline">
          <Link to="/restaurants">Nos Restaurants</Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-l from-red-500 to-red-700 text-white px-4 py-2 rounded hover:from-red-600 hover:to-red-800"
            >
              Se déconnecter
            </button>
          ) : (
            <Link to="/connexion">
              <button className="bg-gradient-to-l from-gray-400 to-gray-700 text-white px-4 py-2 rounded hover:from-gray-600 hover:to-gray-800">
              Se connecter
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
