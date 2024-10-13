import React from 'react';

const cardsData = [
  { id: 1, title: 'Untitled', edited: '5 months ago' },
  { id: 2, title: 'Untitled', edited: '5 months ago' },
  { id: 3, title: 'Untitled', edited: '5 months ago' },
  { id: 4, title: 'Untitled', edited: '5 months ago' },
  { id: 5, title: 'Untitled', edited: '5 months ago' },
  // Qo'shimcha kartalar qo'shishingiz mumkin
];

const Card = ({ title, edited }) => {
  return (
    <div>
      <div className="w-[319px] h-[192px] bg-gray-100 border rounded-[6px] shadow-sm  mb-3">
      </div>
      <h3 className="text-[10px] font-semibold text-gray-700">{title}</h3>
      <p className="text-[9px] font-semibold text-gray-500">Edited {edited}</p>
    </div>
  );
};

const CardList = () => {
  const cardToShow = cardsData.find((card) => card.id === 1); // id 1 bo'yicha filtr

  return (
    <div>
      {cardToShow ? (
        <Card key={cardToShow.id} title={cardToShow.title} edited={cardToShow.edited} />
      ) : (
        <p>Card not found</p>
      )}
    </div>
  );
};

export default CardList;
