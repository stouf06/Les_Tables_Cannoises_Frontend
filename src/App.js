import './tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Connexion from './components/Connexion';
import Footer from './components/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetails from './pages/RestaurantDetails';
import ReservationPage from './pages/ReservationPage';
import { AuthProvider } from './contexts/AuthContext'; // Import du contexte d'authentification

function App() {
  return (
    <AuthProvider> {/* Ajout de l'AuthProvider pour envelopper toute l'application */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/restaurants/:id/reserver" element={<ReservationPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
