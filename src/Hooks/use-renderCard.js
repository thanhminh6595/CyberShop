import { useEffect, useState } from "react";

const useRenderCard = (dummyValue, CardComponent) => {
  const [screenX, setScreenX] = useState(window.screen.width);
  const responsiveSuperSmallMobile = `max-[440px]:h-490px`;
  const responsiveSmallMobile = `max-[520px]:h-530px`;
  const responsiveBiggerMobile = `max-md:h-590px`;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenX(window.screen.width);
    });
  }, []);

  const categoryHot = dummyValue.map((item, index) => {
    return (
      <div key={item.id}>
        {screenX < 768 ? (
          <div
            className="max-md:absolute top-0 left-0 p-4"
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            <li>
              <CardComponent item={item} />
            </li>
          </div>
        ) : (
          <div className="max-md:absolute top-0 left-0 p-4">
            <li>
              <CardComponent item={item} />
            </li>
          </div>
        )}
      </div>
    );
  });

  return {
    categoryHot,
    responsiveSmallMobile,
    responsiveSuperSmallMobile,
    responsiveBiggerMobile,
  };
};

export default useRenderCard;
