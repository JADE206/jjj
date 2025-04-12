import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Bienvenue, {user.name}!</h1>
      <button onClick={() => navigate('/profile')} className="mr-4 bg-blue-600 text-white px-4 py-2 rounded">
        Mon Profil
      </button>
      <button onClick={() => { logout(); navigate('/login'); }} className="bg-gray-600 text-white px-4 py-2 rounded">
        Déconnexion
      </button>
    </div>
  );
}