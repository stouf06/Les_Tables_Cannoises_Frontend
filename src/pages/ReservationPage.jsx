import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReservationPage() {
  const { id } = useParams();
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleReservation = () => {
    alert(`Réservation confirmée pour ${guests} personne(s) le ${day} à ${time}.`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Réserver au restaurant {id}</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Jour</label>
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Heure</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Nombre de convives</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleReservation}
          className="bg-gradient-to-r from-red-200 to-yellow-200 text-gray-800 py-2 px-4 rounded hover:from-gray-400 hover:to-gray-600 mt-4"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default ReservationPage;
