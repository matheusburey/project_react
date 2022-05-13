import Link from "../../atoms/Link";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/planos">Planos e Serviços</Link>
      <Link to="/">Sobre Nós</Link>
    </nav>
  );
}

export default Nav;
