import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("item removed");
  };
  return (
    <div className="flex lg:flex-row sm:flex-col items-center  justify-between  py-4 gap-6  border px-4 border-b-black   mt-6">
      <div className="lg:w-[380px] sm:w-[120px] ">
        <img alt="" src={item.image} />
      </div>
      <div className="flex w-[450px]   flex-col  gap-y-4 ">
        <h1 className="font-bold text-center text-md ">{item.title}</h1>
        <h1 className="text-slate-400 lg:block sm:hidden">
          {item.description.split(" ").splice(0, 23).join(" ") + "..."}
        </h1>
        <div className="flex px-6 relative justify-between ">
          <p className="text-green-700 font-bold text-lg left-[12px] ">${item.price}</p>
          <div className="  px-2 rounded-2xl  hover:cursor-pointer flex justify-center items-center bg-red-200 text-red"onClick={removeFromCart}>
            <MdDelete />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default CartItem;
