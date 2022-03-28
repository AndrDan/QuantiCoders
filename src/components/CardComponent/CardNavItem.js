import React from 'react';
const CardNavItem = ({ id, imgSrc, title, activeCard, setActiveCard }) => {
  const handleClick = () => {
    setActiveCard(id);
  };

  return (
    <div onClick={handleClick} className={activeCard === id ? 'active' : ''}>
      <div className="paymethod-card">
        <div className="svgWrapper">{imgSrc}</div>
        <span>{title}</span>
      </div>
    </div>
  );
};
export default CardNavItem;
