import InfoNavBar from "./InfoNavBar";
import ListNavBar from "./ListNavBar";
import SearchNavBar from "./SearchNavBar";

const NavBar = (props) => {
  return (
    <div className="fixed w-full z-30">
      <InfoNavBar />
      <SearchNavBar />
      <ListNavBar />
    </div>
  );
};

export default NavBar;
