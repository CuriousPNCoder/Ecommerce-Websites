import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";



const Cart = () => {
    const [showPriceDiv, setShowPriceDiv] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);


    useEffect(() => {
      const handleScroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        setShowPriceDiv(scrollTop > 0); // Set showPriceDiv to true if scrollTop > 0
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Remove scroll event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100 px-10">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src={item.productimg}
                alt={item.name}
                className="flex-none  w-48  bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="font-semibold leading-6 text-2xl text-gray-900 pb-4">
                  {item.name}
                </p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                  {item.ram}
                </p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                  {item.battery}
                </p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                  {item.processor}
                </p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                  {item.warranty}
                </p>
                <div className="flex pt-4">
                  <div className="flex items-center pr-2">
                    <button
                      type="button"
                      className=" text-gray-500 border border-gray-400 px-3 rounded-sm">
                      +
                    </button>
                    <button className=" text-gray-500 border border-gray-400 px-3 rounded-sm">
                      -
                    </button>
                  </div>
                </div>
                <div className="flex pt-4">
                  <button
                    type="button"
                    class=" text-gray-900 font-medium text-sm text-center inline-flex items-center">
                    Remove Product
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 truncate text-2xl leading-5 font-bold text-green-700">
                {item.price}
              </p>
              <p className="mt-1 truncate pt-2 text-sm leading-5 text-gray-500">
                free delivery
              </p>
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
}

export default Cart;