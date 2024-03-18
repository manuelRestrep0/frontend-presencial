import React from "react";
import UserInfo from "../user/navUser";
import "./nav.css"; // Importar estilos directamente

function NavBar() {
  return (
    <nav>
      <div className="company">
        <div className="company-brand">
          <div className="company-logo">
            <img src="/logo.png" alt="Company Logo" /> {/* Añadir el atributo alt */}
          </div>
          <div className="company-name">Singapur Airlines</div>
        </div>
      </div>
      <div className="menu-options">
        <UserInfo />
        <div className="Logout">
          <img src="/logout.png" className="logout-logo" alt="Logout" /> {/* Añadir el atributo alt */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

