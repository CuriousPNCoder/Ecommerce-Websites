import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/categories/${categoryId}`
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* <h2>{category ? category.name : "Category not found"}</h2> */}

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
