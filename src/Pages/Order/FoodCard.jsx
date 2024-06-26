import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCarts from "../../Hooks/UseCarts";


const FoodCard = ({item}) => {
    const { name, recipe, image, price,_id } = item
    const navigate=useNavigate()
    const{user}=UseAuth()
    const location=useLocation()
    const axiosSecure=UseAxiosSecure()
    const [,refetch]=UseCarts()

    const handleToCart=()=>{
        if(user&& user.email){
            //send cart item to the database
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name}Added to your cart `,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch cart to update the cart items 
                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title:"You are not logged in",
                text: "please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to the login page
                  navigate('/login',{state:{from:location}})
                }
              });
              
        }
    }
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
                <button onClick={handleToCart} className="btn btn-outline my-5 border-0 border-b-2 px-5 text-yellow-600 bg-gray-300">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;