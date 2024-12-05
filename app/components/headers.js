import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-56 bg-beige shadow-md">
      <div>
        <a href="/">
          <Image
            src="/logo.png" // Remplace par le chemin de ton logo
            alt="Logo"
            width={100} // Ajuste la largeur selon ton besoin
            height={100} // Ajuste la hauteur selon ton besoin
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
