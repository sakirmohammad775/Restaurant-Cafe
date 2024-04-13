import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import UseMenu from "../../Hooks/UseMenu";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/pizza-bg.jpg'


const OurMenu = () => {
    const [menu] = UseMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* covered image */}
            <Cover image={menuImage} title={'Our Menu'} subTitle={'WOULD YOU TO TRY A DISH'}></Cover>

            {/* offered food */}
            <SectionTitle subHeading={`Don't miss `} heading={`Today's Offer`}></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory> 

            {/* desserts */}
            
            <MenuCategory items={desserts}img={dessertImg}title={'dessert'}></MenuCategory> 
            <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}></MenuCategory> 
            <MenuCategory items={salad}img={saladImg} title={'salad'}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={'soup'}></MenuCategory>
        </>
    );
};

export default OurMenu;