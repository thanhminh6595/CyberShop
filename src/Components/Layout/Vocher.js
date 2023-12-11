import { NavLink } from "react-router-dom";
import voc1 from "../../assets/22. 1200x150-tgdd-1200x150-1 1.svg";

const Vocher = () => {
  return (
    <>
      <div className="mx-3 my-10">
        <NavLink to="">
          <img className="w-full h-full object-cover" src={voc1} alt={voc1} />
        </NavLink>
      </div>
    </>
  );
};
export default Vocher;
