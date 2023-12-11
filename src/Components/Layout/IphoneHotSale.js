import Card from "../../Card/Card";
import ProductCard from "./ProductCard";
import hotSaleImg from "../../assets/9.iPhone-14-thumb-tim-1-600x600 1.svg";
import useRenderCard from "../../Hooks/use-renderCard";

const DUMMY_HOTSALE = [
  {
    id: "hs1",
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: "hs2",
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: "hs3",
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
  {
    id: "hs4",
    name: "iPhone 14 Pro Max 512GB ",
    oldPrice: 43999000,
    currentPrice: 35790000,
    bonus: "Giảm 600.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 đổi 1",
    bought: 29,
    discount: 19,
    image: hotSaleImg,
  },
];

const IphoneHotSale = (props) => {
  const {
    categoryHot: iphoneHotSaleItem,
    responsiveBiggerMobile,
    responsiveSmallMobile,
    responsiveSuperSmallMobile,
  } = useRenderCard(DUMMY_HOTSALE, ProductCard);

  return (
    <Card>
      <div className="my-10 bg-white rounded-xl">
        <div className="px-3 py-10">
          <div className="flex justify-between items-center mb-5 max-md:block ">
            <h3 className="uppercase text-2xl font-bold max-md:text-center max-md:mb-5">
              iphone bán chạy
            </h3>
            <div className="bg-third-color p-2 rounded-md active:scale-95 font-bold max-md:w-1/2 max-md:mx-auto text-center">
              <button className="text-fourth-color">{`>>> Xem tất cả`}</button>
            </div>
          </div>

          <div
            className={`max-md:overflow-scroll ${responsiveSmallMobile} ${responsiveBiggerMobile} ${responsiveSuperSmallMobile}`}
          >
            <ul className="grid grid-cols-4 gap-10 max-xl:grid-cols-2 max-md:relative max-md:block">
              {iphoneHotSaleItem}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default IphoneHotSale;
