import { NavLink } from "react-router-dom";

const activeStyles = "text-red-500";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Página Inicial
      </NavLink>
      <NavLink
        to={"/students"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Estudantes
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Contactos
      </NavLink>
     </nav>
      );
      };