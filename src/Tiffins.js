import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Veg.css';
import Nav from './Nav';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [imageImports, setImageImports] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://picante-backendfile.onrender.com/tiffins');
        setProducts(response.data);
        // Dynamically import images
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

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div>
      <Nav links={Nav} />
      <div className='home'>
        <h1>Tiffins Specials</h1>
        <div className='menu'>
          {products.map((item) => (
            <div key={item.id} className='item'>
              {/* Use dynamically imported image */}
              {imageImports[item.id] && (
                <img src={imageImports[item.id]} alt={item.name} className='item-image' />
              )}
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className='price'>Price: {item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
