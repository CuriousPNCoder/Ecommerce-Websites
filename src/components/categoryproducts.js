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
      <h2>{category ? category.name : "Category not found"}</h2>
      <ul>
        {category &&
          category.products.map((product) => (
            <li key={product.id}>
              <div>
                <h4>{product.name}</h4>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
