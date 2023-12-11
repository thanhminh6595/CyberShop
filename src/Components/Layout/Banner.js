import { Link, NavLink } from "react-router-dom";
import banner1 from "../../assets/4.banner-1 1.png";
import banner2 from "../../assets/5. iphone-15-pro-max 1.png";
import banner3 from "../../assets/6. iphone-15-pro 1.png";
import banner4 from "../../assets/7. iphone15-plus 1.png";
import banner5 from "../../assets/8. iphone-15 1.png";

const DUMMY_BANNER = [
  { id: "b2", src: banner2 },
  { id: "b3", src: banner3 },
  { id: "b4", src: banner4 },
  { id: "b5", src: banner5 },
];

const Banner = () => {
  return (
    <div className="mx-5">
      <NavLink className="w-full ">
        <img src={banner1} alt="banner1" className="w-full object-cover" />
      </NavLink>
      <div>
        <ul className="grid grid-cols-4 gap-5 max-xl:grid-cols-2">
          {DUMMY_BANNER.map((banner) => {
            return (
              <div key={banner.id}>
                <Link>
                  <img
                    src={banner.src}
                    alt="banner2"
                    className="w-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
