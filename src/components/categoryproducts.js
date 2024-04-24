import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartaction";
import Toast from "../components/styles/toast";
import { Link } from "react-router-dom";


const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `https://json-data-7.onrender.com/categories/${categoryId}`
        );
        setCategory(response.data);
      } catch (error) {
        setError("Error fetching category. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to cart:", product);
    setShowToast(true); 
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* <h2>{category ? category.name : "Category not found"}</h2> */}
      {showToast && <Toast message="Product added to cart" />}

      <ul role="list" className="divide-y divide-gray-100  px-10">
        {category &&
          category.products.map((product) => (
            <li key={product.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="flex-none  w-48  bg-gray-50"
                  src={product.productimg}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="font-semibold leading-6 text-2xl text-gray-900 pb-4">
                    {product.name}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.ram}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.productinch}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.productcamera}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.battery}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.processor}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500 pb-1">
                    {product.warranty}
                  </p>
                  <div className="flex pt-2">
                    <div className="flex">
                      <button
                        type="button"
                        class="text-white  bg-gray-300  hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                        onClick={() => handleAddToCart(product)}>
                        <svg
                          class="w-3.5 h-3.5 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 21">
                          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        class="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                        <svg
                          class="w-3.5 h-3.5 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 21">
                          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        <Link to="/buynow">Buy now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 truncate text-2xl leading-5 font-bold text-black ">
                  {product.price}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
