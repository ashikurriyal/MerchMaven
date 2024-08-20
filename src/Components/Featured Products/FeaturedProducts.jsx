import { useEffect, useState } from "react";
import FeatureCards from "./FeatureCards";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { useLoaderData } from "react-router-dom";

const FeaturedProducts = () => {
  const axiosPublic = useAxiosPublic();

  const [product, setProduct] = useState([]);
  const [loadedData, setLoadedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("price");

  //pagination
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  //   const itemPerPage = 6;
  const numberOfPages = Math.ceil(loadedData / itemsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //   const res = await axiosPublic.get(
      //     `/products?page=${currentPage}&size=${itemsPerPage}&search=${searchTerm}&sortType=${sortType}&sortOrder=${sortOrder}`
      //   );
      const res = await axiosPublic.get(
        `/products?page=${currentPage}&size=${itemsPerPage}&search=${searchTerm}&sortType=${sortType}&sortOrder=${sortOrder}`
      );
      setProduct(res.data);
      const countRes = await axiosPublic.get(
        `/productsCount?search=${searchTerm}`
      );
      setLoadedData(countRes.data.count);
    };
    fetchData();
  }, [
    currentPage,
    itemsPerPage,
    searchTerm,
    sortType,
    sortOrder,
    axiosPublic,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosPublic.get("/productsCount");
      //   const res = await axiosPublic.get(`/productsCount?search=${searchTerm}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
      return setLoadedData(res.data.count);
    };
    fetchData();
  }, [axiosPublic]);
  console.log(product, loadedData);

  const handleSort = (order, type) => {
    setSortOrder(order);
    setSortType(type);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortProducts = product.slice().sort((a, b) => {
    if (sortType === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortType === "date") {
      return sortOrder === "asc"
        ? new Date(a.creationDate) - new Date(b.creationDate)
        : new Date(b.creationDate) - new Date(a.creationDate);
    }
    return 0;
  });

  const filterProducts = sortProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="max-w-7xl mx-auto lg:space-y-10 space-y-2">
      <div className="text-center space-y-4">
        <h1 className="lg:text-5xl text-3xl font-bold">Featured Product</h1>
        <p className="lg:text-xl text-lg font-normal">
          Discover our featured product and find your dream gadgets today.
          Browse through the latest listings and take advantage of the best
          deals on the market.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-3 mb-4">
        <div>
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
            className="border-2 border-teal-600 text-teal-600 text-base lg:font-medium font-normal rounded-md p-3"
          />
        </div>
        <div>
          <select
            onChange={(e) => handleSort(e.target.value, "desc", "date")}
            className="border-2 border-teal-600 text-teal-600 text-base lg:font-medium font-normal  rounded-md p-3"
            name=""
            id=""
          >
            <option value="">Sort By</option>
            <option value="">New Added Product</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => handleSort(e.target.value, "price")}
            value={sortOrder}
            className="border-2 border-teal-600 text-teal-600 text-base lg:font-medium font-normal  rounded-md p-3"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
        {
          filterProducts.map((item) => (
            <FeatureCards key={item.id} item={item}></FeatureCards>
          )) //slice(0,4)
        }
      </div>
      <div className="text-center">
        <button
          className="mr-4 px-4 py-2 text-lg font-medium rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-black"
          onClick={handlePrevPage}
        >
          {" "}
          Prev{" "}
        </button>
        {pages.map((page) => (
          <button
            className={`mr-4 px-4 py-2 text-lg font-medium rounded-lg ${
              currentPage === page
                ? "bg-gradient-to-r from-teal-500 to-teal-600"
                : ""
            }`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className="mr-4 px-4 py-2 text-lg font-medium rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-black"
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          className="mr-4 px-4 py-2 text-lg font-medium rounded-lg border-2 border-teal-600"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="60">60</option>
        </select>
      </div>
    </div>
  );
};

export default FeaturedProducts;
