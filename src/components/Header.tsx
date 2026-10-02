import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext.tsx";
import "../index.css";
import logo from "../assets/logo.svg";

type HeaderProps = { name: string };

export default function Header({ name }: HeaderProps) {
  const { likes } = useLikes();
  return (
    <header className="site-header">
      <strong className="brand">
        <img src={logo} alt="" width={32} height={32} />
        {name}
      </strong>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span>♥ {likes}</span>
    </header>
  );
}
