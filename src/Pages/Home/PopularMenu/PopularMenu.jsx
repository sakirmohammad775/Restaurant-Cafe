
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu]=UseMenu() // data loading from use menu hook 
    const popularItems=menu.filter(item=>item.category === 'popular')
    
    return (
        <>
        <section className="mb-12">
            <SectionTitle
                subHeading='Check It Out'
                heading="from Our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item=><MenuItem
                         key={item._id}
                         item={item}
                         ></MenuItem>)
                }
            </div>
            <div className="text-center">

            <button className="btn btn-outline my-5 border-0 border-b-2 text-center text-black ">View  All Menu</button>
            </div>
        </section>
        
        </>
    );
};

export default PopularMenu;