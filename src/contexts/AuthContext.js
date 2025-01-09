import React, { createContext, useContext, useState } from "react";

// Création du contexte
const AuthContext = createContext();

// Fournisseur du contexte
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false); // Nouvelle fonction pour déconnexion

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => useContext(AuthContext);
