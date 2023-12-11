import { Link } from "react-router-dom";
import usePrice from "../../Hooks/use-price";

const ProductCard = ({ item }) => {
  const { priceFunction } = usePrice();
  const oldPrice = priceFunction(item.oldPrice);
  const currentPrice = priceFunction(item.currentPrice);

  return (
    <div>
      <Link className="relative">
        <div className="w-full rounded-xl shadow-primary-shadow overflow-hidden">
          <div className="z-10 sticky rounded-xl shadow-xl bg-white px-7 max-sm:p-2 py-10 ">
            <div className="hover:scale-105 duration-500 max-sm:mt-5">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover mb-5 mx-auto text-center max-sm:w-1/2 w-1/2 max-sm:mt-10"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-base ">{item.name}</h3>
              <p className="text-base text-gray-400 line-through">
                {oldPrice} VND
              </p>
              <h2 className="text-xl font-bold text-fourth-color">
                {currentPrice} VND
              </h2>
            </div>
            <div className="bg-third-color p-3 text-base rounded-md">
              <p>{item.bonus}</p>
            </div>
            <div className="mt-3 rounded-xl bg-secondary-color text-white">
              <p className="text-center text-xl py-1">Đã bán {item.bought}</p>
            </div>
          </div>
          <div className="absolute top-4 -left-2">
            <div className="relative">
              <div className="z-10 absolute -top-1 -left-1 bg-fourth-color rounded-e-xl p-2 w-max font-bold text-white ">
                Giảm {item.discount}%
              </div>
              <div className="z-0 w-5 h-5 top-6 -left-0 bg-fifth-color rotate-45 absolute"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
