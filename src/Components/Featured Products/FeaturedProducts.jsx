import { useEffect, useState } from "react";
import FeatureCards from "./FeatureCards";


const FeaturedProducts = () => {

    const [product, setProduct] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
            fetch('data.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
            
    },[])
    console.log(product)

    const handleSort = (order) => {
        setSortOrder(order);
      };
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const sortProducts = product.slice().sort((a,b) => {
        if(sortOrder === 'asc'){
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
      })

      const filterProducts = sortProducts.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div className="max-w-7xl mx-auto lg:space-y-10 space-y-5">
            <div className="text-center space-y-4">
                <h1 className="lg:text-5xl text-3xl font-bold">Featured Product</h1>
                <p className="lg:text-xl text-lg font-normal">Discover our featured product and find your dream gadgets today. Browse through the latest listings and take advantage of the best deals on the market.</p>
            </div>
            <div className="flex justify-between mb-4">
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
            onChange={(e) => handleSort(e.target.value)}
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
                    filterProducts.map(item => <FeatureCards key={item.id} item = {item}></FeatureCards>) //slice(0,4)
                }
            </div>

        </div>
    );
};

export default FeaturedProducts;