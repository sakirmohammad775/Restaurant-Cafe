
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    
    return (
        <>
        <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <Contact></Contact>
        <FeaturedItem></FeaturedItem>
        <Testimonials></Testimonials>
        </>
    );
};

export default Home;