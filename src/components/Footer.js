import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Liens vers les pages */}
        <div className="flex justify-around mb-6">
          <Link to="/about" className="hover:underline">
            À propos
          </Link>
          <Link to="/terms" className="hover:underline">
            Conditions générales
          </Link>
          <Link to="/privacy" className="hover:underline">
            Politique de confidentialité
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>

        {/* Icônes des réseaux sociaux */}
        <div className="flex justify-left space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-400"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
          <div className="flex justify-around">
          © {new Date().getFullYear()} Les Tables Cannoises. Tous droits réservés.
          </div>
        </div>
    </footer>
  );
}

export default Footer;
