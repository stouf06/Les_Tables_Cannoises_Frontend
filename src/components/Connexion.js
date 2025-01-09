import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth(); // Utilise le contexte pour mettre à jour l'état de connexion

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupération des données du formulaire
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.action = isLogin ? 'connexion' : 'inscription';

    try {
      const response = await fetch('http://localhost/Les_Tables_Cannoises_Backend/les_tables_cannoises/api/users.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        login(); // Définit l'utilisateur comme connecté
        
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Connexion' : 'Inscription'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className="block mb-2">
                Nom :
                <input type="text" name="name" className="w-full p-2 border rounded mt-1" required />
              </label>
              <label className="block mb-2">
                Prénom :
                <input type="text" name="first_name" className="w-full p-2 border rounded mt-1" required />
              </label>
              <label className="block mb-2">
                Téléphone :
                <input type="text" name="phone" className="w-full p-2 border rounded mt-1" required />
              </label>
              <label className="block mb-2">
                Rôle :
                <select name="role" className="w-full p-2 border rounded mt-1" required>
                  <option value="client">Client</option>
                  <option value="restaurateur">Restaurateur</option>
                </select>
              </label>
            </>
          )}
          <label className="block mb-2">
            Email :
            <input type="email" name="email" className="w-full p-2 border rounded mt-1" required />
          </label>
          <label className="block mb-4">
            Mot de passe :
            <input type="password" name="password" className="w-full p-2 border rounded mt-1" required />
          </label>
          <div className="flex justify-center">
            <button type="submit" className="bg-gradient-to-r from-red-200 to-yellow-200 text-center text-bold-gray-800 px-16 py-2 rounded hover:from-gray-400 hover:to-gray-600">
              {isLogin ? 'Se connecter' : "S'inscrire"}
            </button>
          </div>
        </form>
        <button onClick={toggleForm} className="w-full mt-4 text-bold-gray-500">
          {isLogin ? "Créer un compte ?" : "Se connecter ?"}
        </button>
      </div>
    </div>
  );
}

export default Connexion;
