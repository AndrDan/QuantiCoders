import React from 'react';

const CardContent = ({ id, activeCard, children }) => {
  return activeCard === id ? (
    <div className="CardContent">{children}</div>
  ) : null;
};

export default CardContent;
