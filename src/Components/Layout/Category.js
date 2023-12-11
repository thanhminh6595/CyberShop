import { NavLink } from "react-router-dom";
import category1 from "../../assets/10. iphone 16.svg";
import category2 from "../../assets/11.mac 1.svg";
import category3 from "../../assets/12. ipad 4.svg";
import category4 from "../../assets/13. watch 1.svg";
import category5 from "../../assets/14. headphone 1.svg";
import category6 from "../../assets/15. accesory 1.svg";
import Card from "../../Card/Card";

const Category = (props) => {
  return (
    <Card>
      <div className="bg-white rounded-lg py-10 px-3 my-10">
        <h1 className="uppercase text-2xl font-bold text-center mb-5">
          danh mục nổi bật
        </h1>
        <div className="grid grid-cols-6 gap-10 max-xl:grid-cols-3 max-[440px]:grid-cols-2">
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-iphone-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category1}
                  alt={category1}
                />
                <p className="text-center font-bold ">Iphone</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-macbook-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category2}
                  alt={category2}
                />
                <p className="text-center font-bold ">Macbook</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-ipad-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category3}
                  alt={category3}
                />
                <p className="text-center font-bold ">Ipad</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-watch-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category4}
                  alt={category4}
                />
                <p className="text-center font-bold ">Watch</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-airpod-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category5}
                  alt={category5}
                />
                <p className="text-center font-bold ">Airpod</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="active:scale-95 py-5 px-3 rounded-xl shadow-xl bg-accessory-color">
              <div>
                <img
                  className="w-2/3 mx-auto h-full object-cover"
                  src={category6}
                  alt={category6}
                />
                <p className="text-center font-bold ">Accessory</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </Card>
  );
};

export default Category;
