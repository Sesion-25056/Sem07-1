import React from 'react';

const Home = () => {
  return (
    <div className="bg-surface">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] md:h-[870px] w-full overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0">
          <img 
            alt="El Sabor de Nuestra Herencia" 
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvrPxT4W31W6NlDPpnqiivuHiVQGhFXQFdiMp-1gmJYTe955dDASIIMaHcjJPb1f1Y8FOiJSCvj6JD7z6OZ3N0heLfdr6DxpCtJSQ1db8QOpmvGb1izYOn2DzhSMVaUX9-PYilgrMdIOng8ZihHU1kNhg9MKo5TlAitpEC1OCcYsyh419Xb5WZMNGoTej78seWrgZ9BRRnVjOnFGOhXJHrvWT_ZJMW_5jZG_bfbxaIQmyRHF_DpJ8ank3ZG0QAL_Vq6OKtbVHE7ak"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-32">
          <span className="text-secondary-fixed-dim font-semibold tracking-widest uppercase mb-4">
            Tradición Criolla Limeña
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-headline-lg max-w-2xl mb-6 leading-tight">
            El Sabor de Nuestra Herencia
          </h1>
          <p className="text-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body-lg">
            Recetas centenarias que capturan la esencia del Perú. Una experiencia gastronómica donde cada ingrediente cuenta una historia de nuestra tierra.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary-container transition-all active:scale-95">
              Ver la Carta
            </button>
            <button className="border border-white/40 text-white backdrop-blur-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION (BENTO STYLE) */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline-lg">Explora el Menú</h2>
          <div className="h-[1px] flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Categoría Grande */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl h-[400px] shadow-sm">
            <img 
              alt="Entradas Criollas" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUT9uYxVBcBwzGq9UFQKvAcCj1OBEPqe37vC-4zQQkbSWgplJZP79s8v1MD238kO2-R0PoXq6EYpZVuzlp5eEpJD89sAJkcO8MyMVvr5Pw2niMWWUnss8gFF8gZTEW8D6E1XC8352apRc8GxDKKCKqeRVFwQmeACk_xMCc3cPyCodA4AA5pyK_Lq5ADFwRfcivpAhXmQZ7lz56m4giFso1VmtIsDjcF6mteOeucsMuJsaAW7prnZOwTDXSJsvbIeoD39-YLxT8kFw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold">Entradas Legendarias</h3>
              <p className="text-white/80">Desde causas hasta ceviches frescos.</p>
            </div>
          </div>

          {/* Categoría Mediana */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl h-[188px] shadow-sm">
            <img 
              alt="Platos de Fondo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjKnyWglDkJXLDuik0_i4KFHQC_4oqToE8low8VbCxpu8_q5tohSFf-8DncavjHKGmLOuaERV-chq8QRFC2GXre9_PsWOhtBzzZf9iEe2Y3Uog4UEwLXAAy0tmMOA2Syqu2_f_al_3BCcPXHk5PIIndHUOr51ox2ojyccLdmCJPqNFTwkuL6OBrjOg3H_Sa691xafAQJDKygBtnfM2FIUGVF0SbtCRWsqJFQMvTGN31LgmyD37gOhiW3rpDWR82Lq3D_Vloi2ag5c"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">Nuestros Fondos</h3>
            </div>
          </div>

          {/* Categorías Pequeñas */}
          {['Pisco & Cocteles', 'Dulces Tradiciones'].map((cat, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl h-[188px] shadow-sm">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
              <img 
                alt={cat} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={idx === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBzEhIEyF_E5wMPCHnevO2FMbc4DB1DB9c5fIffh6exd461qtfjTua29kHIx5OA_RhwSAYstjL_-yRf7vAq7z4_i9Rd7mZ3a1OIBrpgck2pgTTUAMQqtAB_cTty-cGt_lNe7Owr3omDwGs30E16BJR46Tm3xNGkKQlCWvowsa7r3qJSaahfnI8Nweq6vVxh8M5B30zdl1cjBV3kpOHPVd-npBjgnQbBNo_iwn7oss-6XiHL6hIaBmgZlazO0lR1GXciVdgQ-Gv1-1o" : "https://lh3.googleusercontent.com/aida-public/AB6AXuA__CQ4UWus1JiMdatEZr5e13QZ8HDVdHC3XMaQ8j-9wj7PAIjQTMSHdrY5fKVwwsIb7nWgaiRFnAh3KL4eld0cTrAlgWHv97K6eQVX4lX2naFP1tl8e_JOhowmO5dpte1LtVHiKIHChLJhVWqRLY0jkQmJTE5sW614bLTJmM9JNjEplNsBW9CSKQcJViVm5CxR6OGy39fq4lKX7we2QCTToTdcMVR5xnuCX9KkOqU6ISM0L2trXYLNupipJbLEdY6XUsukoCo-gnc"}
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <h3 className="font-bold">{cat}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;