import NavItem from "./navItem";
import { navItemsLeft, navItemsRight } from "./navItems";

const NavBar = () => {
  return (
    <nav className="h-16 bg-tmdbDarkBlue text-white flex px-10 justify-between font-semibold lg:mx-auto max-w-[1400px]">
      <NavItem items={navItemsLeft} />
      <NavItem items={navItemsRight} />
    </nav>
  );
};

export default NavBar;
