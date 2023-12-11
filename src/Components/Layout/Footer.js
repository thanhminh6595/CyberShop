import { Link } from "react-router-dom";

const DUMMY_FOOTER = [
  {
    id: 1,
    title: "chính sách",
    lists: [
      { text: "Chính sách mua hàng" },
      { text: "Chính sách bảo hành" },
      { text: "Chính sách đổi trả" },
      { text: "Chính sách giao hàng" },
      { text: "Chính sách bảo mật" },
    ],
  },
  {
    id: 2,
    title: "hướng dẫn",
    lists: [
      { text: "Hướng dẫn mua hàng" },
      { text: "Hướng dẫn trả góp" },
      { text: "Hướng dẫn chuyển khoản" },
      { text: "Hướng dẫn đổi trả" },
      { text: "Hướng dẫn tra cứu đơn hàng" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="text-white p-10 bg-primary-color">
      <h1 className="uppercase text-5xl mb-10 tracking-wider font-bold">
        Cyber Shop
      </h1>
      <div className="grid grid-cols-3 gap-10 max-xl:grid-cols-1">
        <div>
          <p className="mb-5 leading-5">
            Hệ thống cửa hàng CYBERSHOP chuyên bán lẻ điện thoại, máy tính
            laptop, smartwatch, smarthome, phụ kiện chính hãng - Giá tốt, giao
            miễn phí.
          </p>
          <p className="mb-5">
            Địa chỉ: 01 Lê Duẫn, Phường Bến Nghé, Quận 1, Tp.HCM
          </p>
          <p className="mb-5">Điện thoại: 1900 6789</p>
          <p className="mb-5">
            Email: <Link>support@cybershop.vn</Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {DUMMY_FOOTER.map((value) => {
            return (
              <div key={value.id}>
                <div className="font-semibold text-2xl mb-5 text-center uppercase">
                  {value.title}
                </div>
                <ul>
                  {value.lists.map((list) => {
                    return (
                      <li key={list.text} className="list-none mb-3 text-lg">
                        <Link>{list.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <div className="relative">
            <h1 className="uppercase font-semibold text-2xl mb-5 text-center">
              kết nối với chúng tôi
            </h1>
            <div className="flex justify-between items-center"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
