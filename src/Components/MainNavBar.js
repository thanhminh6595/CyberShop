import InfoNavBar from "./InfoNavBar";
import ListNavBar from "./ListNavBar";
import SearchNavBar from "./SearchNavBar";

const NavBar = (props) => {
  return (
    <>
      <InfoNavBar />
      <SearchNavBar />
      <ListNavBar />
    </>
  );
};

export default NavBar;
