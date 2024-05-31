import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-full h-full flex lg:flex-col mx-auto ">
      {cart.length > 0 ? (
        <div className="flex lg:flex-row sm:flex-col  max-w-[1080px] space-x-6 mx-auto">
          <div className="lg:w-[55%] sm:[75%]">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col py-3 max-w-[45%]">
            <div className="font-bold text-center  lg:block sm:hidden text-2xl mt-6  text-green-700 ">Your Cart</div>
            
            <div className="font-bold mt-2 text-center lg:block sm:hidden  gap-y-4 text-xl text-green-700" >Summary</div>
            <p>
              <span className="font-bold text-center lg:block sm:hidden text-green-700 ">Total Items: {cart.length}</span>
            </p>
            <div className="mt-4 ">
            <p className="font-bold lg:block text-center ml-10 sm:hidden text-lg" >Total Amount : Rs {Math.round(totalAmount)}</p>
            <button className="bg-green-600 mt-3 py-2 ml-[79px] px-[50px] text-center text-xl uppercase text-white font-bold">checkout</button>
          </div>
          </div>
          
        </div>
      ) : (
        <div className="flex mx-auto sm:flex-col lg:flex-col py-11 mt-40 items-center justify-center">
          <h1 className="font-bold sm:text-center text-green-700">Cart Empty</h1>
          <Link to={"/"}>
            <button className="px-6 rounded-md  bg-green-700 mt-2 py-1 text-white font-bold ">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
