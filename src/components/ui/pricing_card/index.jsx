import React from 'react';
import './style.scss'; 
import { PricingCard } from "@mocks/db"; 

const Card = ({ selectID }) => {
    const selectedI = PricingCard.find(item => item.id === selectID);

    if (!selectedI) {
        return <div>Element topilmadi</div>; 
    }

    const stars = 4; 
    const totalStars = 5;

    return (
        <div className="card" key={selectedI.id}>
            <div className="stars">
                {[...Array(totalStars)].map((_, i) => (
                    <span key={i} className={i < stars ? 'star filled' : 'star'}>★</span>
                ))}
            </div>
            <h2 className="card-title">{selectedI.title}</h2> 
            <p className="text">{selectedI.content}</p> 
            <div className="user-info">
                <img
                    className="avatar"
                    src={selectedI.img} 
                    alt={selectedI.title} 
                />
                <div className="user-details">
                    <p className="user-name">Organize across</p>
                    <p className="user-title">Ui designer</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
