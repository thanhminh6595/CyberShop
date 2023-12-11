import { NavLink } from "react-router-dom";
import ads1 from "../../assets/17. Cate-(16)_69648270807112023 1.svg";
import ads2 from "../../assets/18. Cate-(16)_69648270807112024 1.svg";

const Adsense = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mx-3">
        <div className="rounded-lg">
          <NavLink to="">
            <img className="w-full h-full object-cover" src={ads1} alt={ads1} />
          </NavLink>
        </div>

        <div className="rounded-lg">
          <NavLink to="">
            <img className="w-full h-full object-cover" src={ads2} alt={ads2} />
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Adsense;
