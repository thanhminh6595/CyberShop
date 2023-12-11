import Card from "../../Card/Card";
import cus1 from "../../assets/24. cus1.svg";
import cus2 from "../../assets/25. cus2.svg";
import cus3 from "../../assets/26. cus3.svg";
import cus4 from "../../assets/27. cus4.svg";
import cus5 from "../../assets/28. cus5.svg";

// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

const Customer = () => {
  initTE({ Carousel });
  return (
    <Card>
      <div className="bg-white rounded-xl p-10 my-10">
        <h1 className="uppercase text-xl font-bold mb-5">
          khách hàng của Cyber
        </h1>
        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
        <div
          id="carouselExampleCaptions"
          className="max-md:relative "
          data-te-carousel-init
          data-te-carousel-slide
          data-te-ride="carousel"
        >
          {/* <!--Carousel indicators--> */}
          <div
            className="min-[768px]:hidden absolute -bottom-2 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="0"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              data-te-carousel-active
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="3"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="4"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 5"
            ></button>
          </div>

          {/* <!--Carousel items--> */}
          <div className="grid grid-cols-5 max-md:block max-md:relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative max-md:float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-active
              data-te-carousel-item
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={cus1} className="block w-full" alt="..." />
            </div>
            {/* <!--Second item--> */}
            <div
              className="relative max-md:float-left -mr-[100%] max-md:hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={cus2} className="block w-full" alt="..." />
            </div>
            {/* <!--Third item--> */}
            <div
              className="relative max-md:float-left -mr-[100%] max-md:hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={cus3} className="block w-full" alt="..." />
            </div>
            {/* <!--Four item--> */}
            <div
              className="relative max-md:float-left -mr-[100%] max-md:hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={cus4} className="block w-full" alt="..." />
            </div>
            {/* <!--Five item--> */}
            <div
              className="relative max-md:float-left -mr-[100%] max-md:hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={cus5} className="block w-full" alt="..." />
            </div>
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Customer;
