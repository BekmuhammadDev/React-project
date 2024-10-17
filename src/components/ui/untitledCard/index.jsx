import React, { useState } from "react";

const cardsData = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
];

const SelectableCards = () => {
  const [selectedCardId, setSelectedCardId] = useState(null); // Holds the ID of the selected card

  const handleCardClick = (id) => {
    // If the clicked card is already selected, deselect it
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id); // Otherwise, select the clicked card
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cardsData.slice(0, 1).map((card) => (
        <div key={card.id} >
          <div
            onClick={() => handleCardClick(card.id)} // Handle card click
            style={{
              width: "500px",
              height: "300px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              padding: "20px",
              border: selectedCardId === card.id ? "2px solid blue" : "1px solid lightgray", // Highlight if selected
              cursor: "pointer",
              margin: "0px", // Center the card
            }}
          >
          </div>
          <p style={{ fontSize: "32px", fontWeight:"600", color: "#7a5c5c", marginTop: "12px", marginBottom:"22px" }}>
            Untitled
          </p>
        </div>
      ))}
    </div>
  );
};

export default SelectableCards;
