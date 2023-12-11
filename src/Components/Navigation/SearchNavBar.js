import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SearchNavBar = () => {
  return (
    <div className="bg-primary-color border-b-2 border-solid border-gray-400">
      <div className="min-[768px]:flex justify-between items-center text-white mx-5 py-3 max-md:place-content-center">
        <h1 className="text-2xl font-bold space-x-2 w-2/12 max-xl:w-1/3 max-md:mb-3 max-md:text-center max-md:w-full">
          CyberShop.com
        </h1>

        <div className="flex items-center relative rounded-xl bg-white w-1/3 max-md:w-fit max-md:mx-auto max-md:mb-5">
          <input
            type="text"
            id="search"
            placeholder="Bạn muốn tìm gì...?"
            className="outline-none  w-full h-10 p-4 rounded-xl text-black"
          />
          <label htmlFor="search" className="absolute right-4 z-10">
            <svg
              className="svg-inline--fa fa-search  w-6"
              fill="#ccc"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </label>
        </div>
        <div className="max-md::w-1/2">
          <ul className="flex items-center max-md:place-content-center">
            <li className="mr-5 hover:opacity-60 duration-300">
              <NavLink>
                <div className="flex items-center">
                  <div className="mr-3 ">
                    <i className="text-xl fa-sharp fa-solid fa-location-dot"></i>
                  </div>
                  <p className="max-xl:hidden">
                    Hệ thống cửa hàng
                    <span className="font-bold block"> 10 cửa hàng</span>
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="mr-5 hover:opacity-60 duration-300">
              <NavLink>
                <div className="flex items-center">
                  <div className="mr-3">
                    <i className="text-xl fa-sharp fa-solid fa-phone-volume"></i>
                  </div>
                  <p className="max-xl:hidden">
                    Gọi mua hàng
                    <span className="font-bold block"> 1900 6789</span>
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="mr-5 hover:opacity-60 duration-300">
              <NavLink>
                <div className="flex items-center">
                  <div className="mr-3">
                    <i className="text-xl fa-solid fa-user w-full"></i>
                  </div>
                  <p className="max-xl:hidden">
                    Thông tin{" "}
                    <span className="font-bold block"> Tài khoản</span>
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="hover:opacity-60 duration-300">
              <NavLink>
                <div className="flex items-center">
                  <div className="mr-3 relative">
                    <i className="text-xl fa-solid fa-cart-shopping"></i>
                    <motion.div
                      animate={{ scale: [1, 0.9, 1.15, 1.3] }}
                      transition={{ duration: 500 }}
                      className="absolute w-5 h-5 rounded-1/2 bg-red-700  translate-x-2 -top-3 -right-2 rounded-50% text-center"
                    >
                      <span className="text-white font-bold text-sm block my-auto">
                        2
                      </span>
                    </motion.div>
                  </div>
                  <p className="max-xl:hidden">
                    Giỏ hàng <span className="font-bold block"> của bạn</span>
                  </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchNavBar;
