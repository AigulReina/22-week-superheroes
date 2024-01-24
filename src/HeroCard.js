import React from 'react';
import './HeroCard.css';

function HeroCard({ hero }) {
    return (
        <div className="hero-card">
            <img src={hero.url} alt={hero.name} />
            <h2>{hero.name}</h2>
            <p>{hero.universe}</p>
            <p>{hero.alterego}</p>
            <p>{hero.ocuppation}</p>
            <p>{hero.friends}</p>
            <p>{hero.superpowers}</p>
            <p>{hero.info}</p>
        </div>
    );
}
export default HeroCard;