import { useState } from "react";
import { Link } from "react-router-dom";

const LIST_NAVBAR = [
  { id: "/home", name: "Trang chủ" },
  { id: "/iphone", name: "Iphone" },
  { id: "/macbook", name: "Macbook" },
  { id: "/ipad", name: "Ipad" },
  { id: "/apple-airpod", name: "Apple-Airpod" },
  { id: "/applewatch", name: "Apple watch" },
  { id: "/accessory", name: "Phụ kiện" },
  { id: "/term", name: "Chính sách" },
  { id: "/contact", name: "Liên hệ" },
];

const ListNavBar = () => {
  const [isShow, setIsShow] = useState(false);
  const showListCategoryHandler = () => {
    setIsShow(!isShow);
  };

  const listItem = LIST_NAVBAR.map((item) => {
    return (
      <li key={item.id} className="list-none mr-4 hover:text-gray-300">
        <div>
          <Link
          // to={item.id}
          >
            {item.name}
          </Link>
        </div>
      </li>
    );
  });

  return (
    <div className=" bg-secondary-color border-b-2 border-solid border-gray-400">
      <div className="hidden max-md:items-center max-md:flex text-white py-2 mx-5">
        <p className="mr-5 font-bold text-xl">Danh mục</p>
        <i
          className="fa-sharp fa-solid fa-list-ul text-lg"
          onClick={showListCategoryHandler}
        ></i>
      </div>
      <ul className="flex text-white py-3 mx-4 max-md:hidden">{listItem}</ul>
    </div>
  );
};

export default ListNavBar;
