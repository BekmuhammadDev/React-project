import React from 'react';
import './style.scss';
import { AboutCard } from "@mocks/db";

const Card = ({ SelectId }) => {
    const selectedId = AboutCard.find(item => item.id === SelectId);
    console.log(selectedId);


    if (!selectedId) {
        return <div>Element topilmadi</div>;
    }

    


    return (
        <div className="Aboutcard" key={selectedId.id}>

            <img
                className="Image"
                src={selectedId.img}
                alt={selectedId.title}
            />

            <h2 className="cardtitle">{selectedId.title}</h2>

            <div className="userdetails">
                <p className="usertitle">Randall Warren</p>
            </div>

            <p className="text">{selectedId.content}</p>
        </div>
    );
};

export default Card;
