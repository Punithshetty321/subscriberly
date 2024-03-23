import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../configs/axios';
import styles from '../../styles/viewproduct.module.css'; // Import the CSS file
import UpdateProduct from './updateproduct'; // Import the UpdateProduct component

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product for update

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch token from localStorage
        const token = localStorage.getItem('token');

        // Fetch products from the backend API with the token included in the headers
        const response = await axiosInstance.get('/api/products/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update state with fetched products
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdateClick = (product) => {
    // Set the selected product for update
    setSelectedProduct(product);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.productContainer}> {/* Apply productContainer class */}
      {products.map((product) => (
        <div key={product.id} className={styles.productTile}> {/* Apply productTile class */}
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Interval: {product.intervals}</p>
          <button onClick={() => handleUpdateClick(product)}>Update Product</button> {/* Update Product button */}
          {/* Add more product details here */}
        </div>
      ))}
      {/* Render UpdateProduct component with selected product for update */}
      {selectedProduct && <UpdateProduct product={selectedProduct} />}
    </div>
  );
};

export default ViewProducts;
