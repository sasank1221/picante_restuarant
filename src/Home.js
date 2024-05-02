import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Nav from './Nav.js';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [imageImports, setImageImports] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://picante-backendfile.onrender.com/products');
        setProducts(response.data);
        const importedImages = {};
        await Promise.all(response.data.map(async (item) => {
          const imageModule = await import(`./images/${item.image}`);
          importedImages[item.id] = imageModule.default;
        }));
        setImageImports(importedImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    console.log('Updated cart:', cart);
  };

  return (
    <div>
      <Nav links={Nav} />
      <div className='home'>
        <h1>Non-Vegetarian Specials</h1>
        <div className='menu'>
          {products.map((item) => (
            <div key={item.id} className='item'>
              {imageImports[item.id] && (
                <img src={imageImports[item.id]} alt={item.name} className='item-image' />
              )}
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className='price'>Price: {`\u20B9`}{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default ProductList;
