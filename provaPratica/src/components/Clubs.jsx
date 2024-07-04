// src/components/Clubs.jsx
import React, { useState, useEffect } from 'react';
import './Clubs.css';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => setClubs(Object.values(data)));
  }, []);

  return (
    <div className="clubs">
      {clubs.map(club => (
        <div key={club.id} className="club">
          <img src={club.escudos['60x60']} alt={`${club.nome} logo`} />
          <h2>{club.nome}</h2>
          <p>{club.apelido}</p>
        </div>
      ))}
    </div>
  );
};

export default Clubs;
