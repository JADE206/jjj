import React, { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('user')) || {};
    setUser(saved);
  }, []);

  const handleChange = (e) => {
    const updated = { ...user, [e.target.name]: e.target.value };
    setUser(updated);
    localStorage.setItem('user', JSON.stringify(updated));
  };

  return (
    <div className="max-w-md mx-auto mt-12 space-y-4 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-semibold">Mon Profil</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Nom"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Email"
      />
      <select
        name="role"
        value={user.role}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="client">Client</option>
        <option value="employe">Employé</option>
      </select>
    </div>
  );
}