import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-links">
      <h1 className="app-title">Animal Time</h1>
      <nav className="app-nav">
        <li>
          <NavLink to="/Home">Home </NavLink>
        </li>
        <li>
          <NavLink to="/Dog">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/Cats">Cats</NavLink>
        </li>
      </nav>
    </header>
  );
}