import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3002/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  py-8 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative">
                <Link to={`/product/${category.id}`}>
                  <div>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img src={category.imgsrc} alt={category.name} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <p className="text-xl text-center pb-1">{category.commentstatus}</p>
                      <p className="text-center text-green-800 font-bold">{category.offer}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
