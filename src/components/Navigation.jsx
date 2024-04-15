import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="fixed w-full z-10 bg-[#282884] text-2xl mb-12">
      <div className="p-3 text-white grid grid-cols-4 text-shadow">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/seacrh">Search</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
