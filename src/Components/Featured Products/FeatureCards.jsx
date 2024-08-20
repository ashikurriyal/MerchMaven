import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const FeatureCards = ({ item }) => {
  const {
    productName,
    productImage,
    description,
    price,
    category,
    ratings,
    brand,
  } = item;
  //   console.log(item)

  return (
    <div>
      <div className=" max-w-sm md:h-[520px] bg-white border-2 border-teal-600 rounded-lg shadow-teal-500 dark:bg-gray-800 dark:border-gray-700 shadow-inner">
        <div className="flex justify-center ">
          <img className="rounded-t-lg h-60 mt-1" src={productImage} alt="" />
        </div>
        <div className="p-5 space-y-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <p className=" text-2xl font-bold text-teal-700 mb-2">${price}</p>
            <div className="flex gap-3">
              <p className="text-gray-600 text-base mb-2 font-medium">
                <span className="text-base font-medium text-teal-700 bg-white px-4 py-2 rounded-2xl border-2 border-teal-700 shadow-sm shadow-teal-600 hover:bg-gradient-to-r from-teal-500 to-teal-600 hover:text-black">
                  {category}
                </span>
              </p>
              <p className="text-gray-600 text-base mb-2 font-medium">
                <span className="text-base font-medium text-teal-700 bg-white px-4 py-2 rounded-2xl border-2 border-teal-700 shadow-sm shadow-teal-600 hover:bg-gradient-to-r from-teal-500 to-teal-600 hover:text-black">
                  {brand}
                </span>
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-base mb-2 font-medium">
            {description}
          </p>

          <div className="flex justify-between items-center mt-6">
            <div className="">
              <Rating style={{ maxWidth: 140 }} value={ratings} readOnly />
            </div>
            <div>
              <Link
                to={``}
                className="inline-flex items-center px-3 py-2 text-base font-medium text-center text-black bg-gradient-to-r from-teal-500 to-teal-600 btn  btn-md hover:bg-white hover:text-black hover:border-2 hover:border-teal-600"
              >
                <span className="inline-flex items-center">
                  {" "}
                  {/* Container for text and SVG */}
                  <span className="mr-1">Details</span>{" "}
                  {/* Margin to separate text and SVG */}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
