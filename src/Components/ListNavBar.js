import { Link } from "react-router-dom";

const LIST_NAVBAR = [
  { id: "l1", name: "Trang chủ" },
  { id: "l2", name: "Iphone" },
  { id: "l3", name: "Macbook" },
  { id: "l4", name: "Ipad" },
  { id: "l5", name: "Apple-Airpod" },
  { id: "l6", name: "Apple watch" },
  { id: "l7", name: "Phụ kiện" },
  { id: "l8", name: "Chính sách" },
  { id: "l9", name: "Liên hệ" },
];

const ListNavBar = () => {
  const listItem = LIST_NAVBAR.map((item) => {
    return (
      <li key={item.id} className="list-none mr-4">
        <div>
          <Link to="">{item.name}</Link>
        </div>
      </li>
    );
  });

  return (
    <div className=" bg-secondary-color">
      <ul className="flex text-white py-3 mx-10">{listItem}</ul>
    </div>
  );
};

export default ListNavBar;
