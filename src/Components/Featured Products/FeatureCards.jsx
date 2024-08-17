// import { Link } from "react-router-dom";

const FeatureCards = () => {
  // const {productName, productImage, description, price, category, ratings, creationDate , brand} = item
  // console.log(item)
  return (
    // <div>
    //     <div className=" max-w-sm md:h-[500px] bg-white border-2 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
    //         <a href="#">
    //             <img className="rounded-t-lg h-60" src={productImage} alt="" />
    //         </a>
    //         <div className="p-5">
    //             <a href="#">
    //                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
    //             </a>
    //             <p className="text-gray-600 text-base mb-2 font-medium">Location: {description}</p>
    //             <p className="text-gray-600 text-base mb-2 font-medium">Category: <span className="text-base font-medium text-green-500">{category}</span></p>
    //             <p className="text-gray-600 text-base mb-2 font-medium">Brand: <span className="text-base font-medium text-green-500">{brand}</span></p>
    //             <p className="text-gray-600 text-base mb-2 font-medium">Updated Date: <span className="text-base font-medium text-green-500">{creationDate}</span></p>
    //             <p className="text-gray-600 text-base mb-2 font-medium">Ratings: <span className="text-base font-medium text-green-500">{ratings}</span></p>
    //             <div className="flex justify-between items-center mt-6">
    //                 <div className="">
    //                     <p className=" text-xl font-bold text-yellow-400 mb-2">${price}</p>
    //                 </div>
    //                 <div>
    //                     <Link to={``} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black btn btn-warning btn-md">
    //                         <span className="inline-flex items-center"> {/* Container for text and SVG */}
    //                             <span className="mr-1">Details</span> {/* Margin to separate text and SVG */}
    //                             <svg className="rtl:rotate-180 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    //                             </svg>
    //                         </span>
    //                     </Link>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // </div>
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
