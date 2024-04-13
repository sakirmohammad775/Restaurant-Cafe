


const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <>
            <div className="flex space-x-4">
                <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
                <div>
                    <p className="uppercase">{name}---------</p>
                    <p>{recipe}</p>

                </div>
                <p>{price}</p>
            </div>
            


        </>
    );
};

export default MenuItem;