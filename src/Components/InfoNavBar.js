const InfoNavBar = () => {
  return (
    <div className="bg-primary-color border-b-2 border-solid border-gray-400">
      <div className="flex justify-between items-center py-3 mx-10 text-white ">
        <p>
          Free Shipping với hóa đơn từ{" "}
          <span className="text-red-400">500.000VNĐ</span>
        </p>
        <p>
          Chính sách <span className="text-red-400"> Bảo hành - Đổi trả </span>
          tốt nhất
        </p>
        <p>
          Hotline : <span className="text-red-400">(+84)822 888 999</span>
        </p>
      </div>
    </div>
  );
};
export default InfoNavBar;
