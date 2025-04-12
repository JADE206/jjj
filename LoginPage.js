import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, email, role: 'client' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <h1 className="text-lg font-semibold">Se connecter</h1>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Connexion
        </button>
      </form>
    </div>
  );
}