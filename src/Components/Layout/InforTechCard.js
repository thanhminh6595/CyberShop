import { Link } from "react-router-dom";

const InforTechCard = ({ item }) => {
  return (
    <div className="">
      <Link className="relative">
        <div className="w-full rounded-xl shadow-primary-shadow overflow-hidden">
          <div className="z-10 sticky rounded-xl shadow-xl bg-white px-7 max-md:px-3 py-10 ">
            <div className="hover:scale-105 duration-500 ">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover mb-5 mx-auto text-center"
              />
            </div>
            <h1 className="font-semibold pb-3">{item.name}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default InforTechCard;
