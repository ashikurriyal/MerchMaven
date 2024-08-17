import { useEffect, useState } from "react";
// import FeatureCards from "./FeatureCards";


const FeaturedProducts = () => {

    const [product, setProduct] = useState(1);

    useEffect(() => {
            fetch('/data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
            
    },[])
    console.log(product)
    return (
        <div className="max-w-7xl mx-auto lg:space-y-10 space-y-5">
            <div className="text-center space-y-4">
                <h1 className="lg:text-5xl text-3xl font-bold">Featured Product</h1>
                <p className="lg:text-xl text-lg font-normal">Discover our featured product and find your dream gadgets today. Browse through the latest listings and take advantage of the best deals on the market.</p>
            </div>

            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                {
                    product.map(item => <FeatureCards></FeatureCards>) //slice(0,4)
                }
            </div> */}

        </div>
    );
};

export default FeaturedProducts;