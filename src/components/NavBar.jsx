import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
      <div className="nav-menu">
        <NavLink to="/" className="linkNav">
          <button className="btnLink">Inicio</button>
        </NavLink>
        <NavLink to="/html" className="linkNav">
          <button className="btnLink">HTML</button>
        </NavLink>
        <NavLink to="/css" className="linkNav">
          <button className="btnLink">CSS</button>
        </NavLink>
        <NavLink to="/javascript" className="linkNav">
          <button className="btnLink">JavaScript</button>
        </NavLink>
      </div>
  );
};
export default Navbar;
