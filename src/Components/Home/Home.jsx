import Banner from "../Banner/Banner";
import FeaturedProducts from "../Featured Products/FeaturedProducts";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="lg:mx-32 mx-6 space-y-20">
                <FeaturedProducts></FeaturedProducts>
            </div>
        </div>
        
    );
};

export default Home;