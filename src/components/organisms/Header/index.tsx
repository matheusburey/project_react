import Logo from "../../molecules/Logo";
import Nav from "../../molecules/Nav";

function Header() {
  return (
    <div className="flex justify-around pt-2">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
