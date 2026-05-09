import React from 'react';

const MenuItem = ({ name, description, price, isNew, image }) => {
  return (
    <div className="menu-item">
      {image && (
        <div className="menu-item-image">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h4 className="menu-item-name">
            {name}
            {isNew && <span className="badge">Novedad</span>}
          </h4>
          <div className="menu-item-dots"></div>
          <span className="menu-item-price">{price}</span>
        </div>
        {description && <p className="menu-item-desc">{description}</p>}
      </div>
    </div>
  );
};

export default MenuItem;
