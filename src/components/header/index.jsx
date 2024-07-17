import { NavBar } from "./nav-bar";

export const Header = () => {
    return (
      <header className="flex items-center justify-between bg-sky-700 text-white h-20 px-8 text-lg">
        <img src="/code.jpg" alt="logo" className="w-30 h-20"  />
          <NavBar />
      </header>
    );
  };
  