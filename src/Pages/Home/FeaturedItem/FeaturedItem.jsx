import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import './featured.css'
const FeaturedItem = () => {
    return (
        <div className="backgroundImage bg-fixed mb-10 pt-10">
            <SectionTitle
                subHeading='Check It Out'
                heading='From Our Menu'
            >
            </SectionTitle>
            <div className="flex text-white gap-10 pt-10">
                <img className="w-[648px] h-[400px] pl-20 pb-20" src={featuredImage} alt="" />
                <div className="pt-10 w-1/2">
                    <p className="text-3xl">March 20March 20, 2023</p>
                    <p className="text-3xl my-3">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium in ratione quasi modi officia, nulla quisquam fuga eligendi debitis praesentium nisi eum provident! Dolorem molestiae voluptate vel nisi, aliquam excepturi eligendi, voluptates tempore at, error iure temporibus maiores. Dicta est alias cupiditate autem mollitia id quas consectetur qui vero blanditiis!</p>
                    <button className="btn btn-outline my-5 border-0 border-b-2 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;