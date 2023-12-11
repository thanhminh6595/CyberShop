import { easeInOut, motion } from "framer-motion";
import Card from "../../Card/Card";
import ProductCard from "./ProductCard";
import hotSaleImg from "../../assets/9.iPhone-14-thumb-tim-1-600x600 1.svg";
import useRenderCard from "../../Hooks/use-renderCard";

const DUMMY_HOTSALE = [
  {
    id: 1,
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: 4,
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
];

const HotSale = (props) => {
  const {
    categoryHot: hotSaleItem,
    responsiveBiggerMobile,
    responsiveSmallMobile,
    responsiveSuperSmallMobile,
  } = useRenderCard(DUMMY_HOTSALE, ProductCard);

  return (
    <Card>
      <div className=" bg-secondary-color rounded-xl">
        <div className="py-10 px-3">
          <div className="flex justify-between items-center text-white mb-5 max-md:block max-md:text-center">
            <h3 className="uppercase text-2xl font-bold ">
              Hot sale trong tuần
            </h3>
            <motion.div
              animate={{ opacity: [0, 0.5, 1], scale: [1, 1.1] }}
              transition={{
                duration: 1,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: easeInOut,
                // repeatDelay: 1,
              }}
              className="max-md:block hidden font-semibold bg-primary-color rounded-lg px-4 py-2 my-5 mx-auto text-center w-fit"
            >
              <p>07 : 07 : 07 : 07</p>
            </motion.div>
            <div className="flex max-md:hidden">
              <div className="font-semibold bg-primary-color mr-4 rounded-lg px-4 py-2">
                <p>
                  <span className="block text-center">07</span>Ngày
                </p>
              </div>
              <div className="font-semibold bg-primary-color mr-4 rounded-lg px-4 py-2">
                <p>
                  <span className="block text-center">07</span>Giờ
                </p>
              </div>
              <div className="font-semibold bg-primary-color mr-4 rounded-lg px-4 py-2">
                <p>
                  <span className="block text-center">07</span>Phút
                </p>
              </div>
              <div className="font-semibold bg-primary-color mr-4 rounded-lg px-4 py-2">
                <p>
                  <span className="block text-center">07</span>Giây
                </p>
              </div>
            </div>
          </div>

          <div
            className={`max-md:overflow-scroll ${responsiveSmallMobile} ${responsiveBiggerMobile} ${responsiveSuperSmallMobile}`}
          >
            <ul className="min-[768px]:grid grid-cols-4 gap-10 max-xl:grid-cols-2 max-md:w-full max-md:relative ">
              {hotSaleItem}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default HotSale;
