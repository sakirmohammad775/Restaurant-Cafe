import { useForm } from "react-hook-form";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { FaUtensilSpoon, FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading='add an item' subHeading="What's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} />
                    {/* first row*/}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-bold">Recipe name</span>

                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full"
                            {...register("Name",{required:true})}
                            required />

                    </label>
                    {/* 2nd row*/}
                    <div className="flex w-full gap-6 my-5">
                        {/* category */}
                        <div className="w-1/2">
                            <div className="label">
                                <span className="label-text font-bold">Category</span>
                            </div>
                            <select {...register('category',{required:true})}
                                className="select select-bordered w-full ">
                                <option disabled selected>Category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* Price */}
                        <div className="w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-bold">Price*</span>

                                </div>
                                <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price",{required:true})} />

                            </label>

                        </div>
                    </div>

                    {/* 3rd row*/}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-bold">Recipe Details</span>
                        </div>
                        <textarea className="textarea border-amber-950 h-36" placeholder="Bio" {...register('recipe')}></textarea>
                    </label>

                    {/* 4th row*/}
                    <div>
                    <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs my-5" {...register('image',{required:true})} />
                    </div>

                    <button className="text-black btn btn-warning">Add Item <FaUtensils className="ml-2"></FaUtensils></button>



                </form>
            </div>
        </div>
    );
};

export default AddItems;
