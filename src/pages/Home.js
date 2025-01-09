
import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Bannière accueillante */}
      <div className="bg-gradient-to-r from-red-200 to-yellow-200 text-gray-800 text-center py-20">
        <h1 className="text-4xl font-bold">Bienvenue sur Les Tables Cannoises</h1>
        <p className="text-lg mt-4">
          Trouvez le meilleur restaurant pour votre prochaine sortie.
        </p>
      </div>

      {/* Zone de recherche */}
      <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow rounded">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recherchez un restaurant</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Champ Ville ou Code Postal */}
          <div>
            <label htmlFor="location" className="block text-gray-600 font-medium mb-1">
              Ville ou Code Postal
            </label>
            <input
              type="text"
              id="location"
              placeholder="Entrez une ville ou un code postal"
              className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Champ Type de Cuisine */}
          <div>
            <label htmlFor="cuisine" className="block text-gray-600 font-medium mb-1">
              Type de Cuisine
            </label>
            <input
              type="text"
              id="cuisine"
              placeholder="Exemple : Italien, Japonais"
              className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Bouton de recherche */}
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-200 to-yellow-200 text-center text-gray-800 px-4 py-2 rounded hover:from-gray-400 hover:to-gray-600"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
