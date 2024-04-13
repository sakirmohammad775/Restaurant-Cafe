import image from '../../../assets/home/chef-service.jpg'
const BistroBoss = () => {
    return (
        <div className=" max-w-screen-2xl h-[520px]  relative" style={{ backgroundImage:`url(${image})`}}>
            <div className='bg-white h-[330px] w-[1000px] text-center absolute p-20 ml-64 mt-24 '>
                <h3 className='text-3xl uppercase pb-5'>bistro boss</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita at assumenda eveniet obcaecati voluptatibus. Consectetur nobis eos aut praesentium fuga. Recusandae corporis optio impedit facere animi aspernatur ipsam labore obcaecati distinctio, harum dolores officia a minus. Consequuntur perspiciatis debitis nam nesciunt ducimus eius rerum sed, quos sapiente, quia dolor?</p>
            </div>
        </div>
    );
};

export default BistroBoss;