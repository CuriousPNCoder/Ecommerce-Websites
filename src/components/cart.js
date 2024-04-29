import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { removeFromCart, addToCart} from "../actions/cartaction";

const Cart = () => {
  const [showPriceDiv, setShowPriceDiv] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowPriceDiv(scrollTop > 0); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddProduct = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100 px-10">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src={item.productimg}
                alt={item.name}
                className="flex-none w-48 bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="font-semibold leading-6 text-2xl text-gray-900 pb-4">
                  {item.name}
                </p>
                <div className="flex items-center pt-4">
                  <button
                    type="button"
                    className="text-gray-900 font-medium text-sm text-center inline-flex items-center border border-spacing-4 border-gray-500 px-3"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <p className="text-gray-900 font-medium text-sm px-3">
                    {item.quantity}
                  </p>
                  <button
                    type="button"
                    className="text-gray-900 font-medium text-sm text-center inline-flex items-center border border-spacing-4 border-gray-500 px-3"
                    onClick={() => handleRemoveProduct(item.id)} // Call handleRemoveProduct with productId
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showPriceDiv && (
        <div className="bg-gray-200 shadow p-4 flex justify-between fixed top-0 left-0 w-full z-10">
          <div className="flex items-center">
            <p>Total Product Price - 10,0000</p>
          </div>
          <button className="text-white bg-green-700 px-4 py-2 rounded-sm">
            Place Order Now
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;