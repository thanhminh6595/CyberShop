import { NavLink } from "react-router-dom";
import header1 from "../../assets/1. 770x340-72_49007051103112023 1.svg";
import header2 from "../../assets/2. Goc-phai-(2)_80803330001112023 1.svg";
import header3 from "../../assets/3. Góc-phải_1538322231102023 1.svg";
import classes from "./Header.module.css";

const DUMMY_HEADER = [
  { id: `header1`, src: header1 },
  { id: `header2`, src: header2 },
  { id: `header3`, src: header3 },
];

const Header = (props) => {
  return (
    <NavLink className={classes.header}>
      {DUMMY_HEADER.map((header) => {
        return <img src={header.src} alt={header.id} key={header.id} />;
      })}
    </NavLink>
  );
};

export default Header;
