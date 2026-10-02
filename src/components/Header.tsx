import "./App.css";
import "./Header.css";

import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext.tsx";

type HeaderProps = { name: string };

export default function Header({ name }: HeaderProps) {
  const { likes } = useLikes();
  return (
    <header className="site-header">
      <strong>{name}</strong>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span>♥ {likes}</span>
    </header>
  );
}
