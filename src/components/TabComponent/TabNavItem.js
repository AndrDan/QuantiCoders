import React from "react";
const TabNavItem = ({ id, imgSrc, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      <div className="help-method-container">
        <div className="svgWrapper">{imgSrc}</div>
        <span>{title}</span>
      </div>
    </li>
  );
};
export default TabNavItem;
