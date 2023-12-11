import Card from "../../Card/Card";
import useRenderCard from "../../Hooks/use-renderCard";
import hotSaleImg from "../../assets/23. ipad 3.svg";
import InforTechCard from "./InforTechCard";

const DUMMY_HOTSALE = [
  {
    id: "hs1",
    name: "Apple đã tung ra sản phẩm mới, cạnh tranh trực tiếp ...",
    description:
      "iPhone 11 có thể được xem như một trong những chiếc điện thoại thành công nhất trong lịch sử các dòng iPhone. Đồng thời, đây cũng là một trong những chiếc flagship hiếm hoi của năm 2019 vẫn còn được kinh doanh chính hãng tại thị trường Việt Nam...",
    image: hotSaleImg,
  },
  {
    id: "hs2",
    name: "Apple đã tung ra sản phẩm mới, cạnh tranh trực tiếp ...",
    description:
      "iPhone 11 có thể được xem như một trong những chiếc điện thoại thành công nhất trong lịch sử các dòng iPhone. Đồng thời, đây cũng là một trong những chiếc flagship hiếm hoi của năm 2019 vẫn còn được kinh doanh chính hãng tại thị trường Việt Nam...",
    image: hotSaleImg,
  },
  {
    id: "hs3",
    name: "Apple đã tung ra sản phẩm mới, cạnh tranh trực tiếp ...",
    description:
      "iPhone 11 có thể được xem như một trong những chiếc điện thoại thành công nhất trong lịch sử các dòng iPhone. Đồng thời, đây cũng là một trong những chiếc flagship hiếm hoi của năm 2019 vẫn còn được kinh doanh chính hãng tại thị trường Việt Nam...",
    image: hotSaleImg,
  },
  {
    id: "hs4",
    name: "Apple đã tung ra sản phẩm mới, cạnh tranh trực tiếp ...",
    description:
      "iPhone 11 có thể được xem như một trong những chiếc điện thoại thành công nhất trong lịch sử các dòng iPhone. Đồng thời, đây cũng là một trong những chiếc flagship hiếm hoi của năm 2019 vẫn còn được kinh doanh chính hãng tại thị trường Việt Nam...",
    image: hotSaleImg,
  },
];

const InforTech = (props) => {
  const {
    categoryHot: inforTechItem,
    responsiveBiggerMobile,
    responsiveSmallMobile,
    responsiveSuperSmallMobile,
  } = useRenderCard(DUMMY_HOTSALE, InforTechCard);

  return (
    <Card>
      <div className="my-10 bg-white rounded-xl">
        <div className="px-3 py-10">
          <div className="flex justify-between items-center mb-5 max-md:block ">
            <h3 className="uppercase text-2xl font-bold max-md:text-center max-md:mb-5">
              tin tức công nghệ
            </h3>
            <div className="bg-third-color p-2 rounded-md active:scale-95 font-bold max-md:w-1/2 max-md:mx-auto text-center">
              <button className="text-fourth-color">{`>>> Xem tất cả`}</button>
            </div>
          </div>
          <div
            className={`max-md:overflow-scroll ${responsiveSmallMobile} ${responsiveBiggerMobile} ${responsiveSuperSmallMobile}`}
          >
            <ul className="grid w-full grid-cols-4 gap-10 max-xl:grid-cols-2 max-md:block max-md:relative">
              {inforTechItem}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default InforTech;
