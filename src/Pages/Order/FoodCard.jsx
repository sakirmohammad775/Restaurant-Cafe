

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='text-black text-xl absolute right-0 mt-14 mr-14'>{price}$</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline my-5 border-0 border-b-2 px-5 text-yellow-600 bg-gray-300">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;