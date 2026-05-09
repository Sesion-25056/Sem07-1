import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Función para saber si la ruta está activa y aplicar estilos
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Menú', path: '/menu' },
    { name: 'Nuestra Historia', path: '/historia' },
    { name: 'Reservaciones', path: '/reservaciones' },
    { name: 'Delivery', path: '/delivery' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <nav className="flex justify-between items-center w-full px-6 md:px-32 py-4 max-w-7xl mx-auto">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-primary font-headline-md">
          La Sazón de Nicolasa
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors font-medium text-sm tracking-wide ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface/70 hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-on-surface/70 hover:bg-surface-container-low p-2 rounded-full transition-all">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          
          <button className="bg-primary-container text-on-primary text-sm font-semibold px-6 py-2 rounded-full hover:bg-primary transition-all active:scale-95">
            Pedir Ahora
          </button>

          {/* MOBILE MENU BUTTON (Opcional) */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;