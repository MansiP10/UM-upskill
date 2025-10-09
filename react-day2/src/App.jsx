import { createContext, useState } from 'react'
import { products } from "./data";
import Cart from './Cart'
import Home from './Home'
import viteLogo from '/vite.svg'
import './App.css'
export const myContext = createContext();
function App() {
  const [data, setData] = useState([products]);

  return (
    <myContext.Provider value={{data:data}}>
    <>
      <Home/>
      <Cart/>
    </>
    </myContext.Provider>
  )
}

export default App


// import React, { useState } from "react";
// import { products } from "./data";

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const updateQuantity = (id, action) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity: action === "increment" ? item.quantity + 1 : item.quantity - 1,
//               }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Navbar */}
//       <header style={{ padding: "10px", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
//         <h1 style={{ fontSize: "24px" }}>Logo</h1>
//         <nav>
//           <a href="#" style={{ margin: "0 10px" }}>Home</a>
//           <a href="#" style={{ margin: "0 10px" }}>Categories</a>
//           <a href="#" style={{ margin: "0 10px" }}>About Us</a>
//         </nav>
//       </header>

//       {/* Products */}
//       <main style={{ display: "flex", padding: "20px" }}>
//         <div style={{ flex: 3, display: "flex", gap: "20px" }}>
//           {products.map((product) => (
//             <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
//               <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//               <button onClick={() => addToCart(product)} style={{ padding: "5px 10px", cursor: "pointer" }}>Add to Cart</button>
//             </div>
//           ))}
//         </div>

//         {/* Cart */}
//         <aside style={{ flex: 1, border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
//           <h3>Cart</h3>
//           {cart.length > 0 ? (
//             <>
//               <ul>
//                 {cart.map((item) => (
//                   <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
//                     <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
//                     <span>{item.name}</span>
//                     <span>${item.price}</span>
//                     <div>
//                       <button onClick={() => updateQuantity(item.id, "decrement")} style={{ margin: "0 5px" }}>-</button>
//                       {item.quantity}
//                       <button onClick={() => updateQuantity(item.id, "increment")} style={{ margin: "0 5px" }}>+</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <h4>Total: ${total.toFixed(2)}</h4>
//             </>
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default App;