import React from 'react';
import MenuItem from './MenuItem';
import imgCarpaccio from '../assets/carpaccio_res.png';
import imgLomo from '../assets/lomo_steak.png';
import imgVolcan from '../assets/volcan_chocolate.png';

const menuData = [
  {
    category: "Entradas",
    items: [
      { name: "Carpaccio de Res", description: "Láminas finas de res con alcaparras, parmesano y aceite de trufa blanca.", price: "$18.00", image: imgCarpaccio },
      { name: "Tartar de Atún", description: "Atún rojo fresco con aguacate, sésamo y vinagreta cítrica de soja.", price: "$22.00", isNew: true },
      { name: "Burrata Cremosa", description: "Tomates confitados, pesto de albahaca fresca y pan rústico tostado.", price: "$16.00" }
    ]
  },
  {
    category: "Platos Principales",
    items: [
      { name: "Lomo al Trapo", description: "Corte premium cocinado lentamente, acompañado de puré de patata trufado.", price: "$45.00", image: imgLomo },
      { name: "Risotto de Setas", description: "Arroz arborio, mezcla de setas silvestres y queso pecorino.", price: "$32.00" },
      { name: "Salmón Glaseado", description: "Filete de salmón con glaseado de miso, sobre cama de espárragos asados.", price: "$38.00" }
    ]
  },
  {
    category: "Postres",
    items: [
      { name: "Volcán de Chocolate", description: "Pastel tibio de chocolate amargo con centro líquido y helado de vainilla.", price: "$12.00", image: imgVolcan },
      { name: "Crème Brûlée", description: "Clásica crema francesa de vainilla con costra de azúcar caramelizada.", price: "$10.00" },
      { name: "Pavlova de Frutos Rojos", description: "Merengue crujiente, crema batida ligera y selección de frutos del bosque.", price: "$14.00", isNew: true }
    ]
  }
];

const Menu = () => {
  return (
    <div className="menu-container">
      <header className="menu-hero">
        <h1 className="restaurant-name">L'Étoile</h1>
        <p className="restaurant-tagline">Cocina de Autor & Experiencias</p>
        <div className="hero-separator"></div>
      </header>

      <div className="menu-content">
        {menuData.map((section, index) => (
          <section key={index} className="menu-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="section-items">
              {section.items.map((item, i) => (
                <MenuItem key={i} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <footer className="menu-footer">
        <p>10% de recargo por servicio no incluido.</p>
        <p>Av. Gastronómica 123, Ciudad Central</p>
      </footer>
    </div>
  );
};

export default Menu;
