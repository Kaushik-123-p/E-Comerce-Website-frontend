// import React, { useState } from "react";

// import logo from "../assets/logo.png";
// import cart_icon from "../assets/cart_icon.png";
// import { Link } from "react-router-dom";
// import "./NavbarText.css";

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   return (
//     <div className="flex justify-around p-4  shadow-[0_1px_3px_-2px_black] ">
//       <div className="flex items-center gap-3 hover:scale-105 transition duration-600 ">
//         <img src={logo} />
//         <p className="text-neutral-900 text-3xl font-semibold ">SHOPPER</p>
//       </div>
//       <ul className="flex items-center justify-center list-none gap-12 text-gray-600 text-xl font-medium">
//         <li
//           className="flex flex-col items-center justify-center gap-2 cursor-pointer"
//           onClick={() => {
//             setMenu("shop");
//           }}
//         >
//           <Link to="/">Shop</Link>
//           {menu == "shop" ? (
//             <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />
//           ) : (
//             <></>
//           )}
//         </li>
//         <li
//           className="flex flex-col items-center justify-center gap-2 cursor-pointer"
//           onClick={() => {
//             setMenu("mens");
//           }}
//         >
//           <Link to="/mens">Men</Link>

//           {menu == "mens" ? (
//             <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />
//           ) : (
//             <></>
//           )}
//         </li>
//         <li
//           className="flex flex-col items-center justify-center gap-2 cursor-pointer"
//           onClick={() => {
//             setMenu("womens");
//           }}
//         >
//           <Link to="/womens">Women</Link>
//           {menu == "womens" ? (
//             <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />
//           ) : (
//             <></>
//           )}
//         </li>
//         <li
//           className="flex flex-col items-center justify-center gap-2 cursor-pointer"
//           onClick={() => {
//             setMenu("kids");
//           }}
//         >
//           <Link to="/kids">Kids</Link>
//           {menu == "kids" ? (
//             <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />
//           ) : (
//             <></>
//           )}
//         </li>
//       </ul>
//       <div className="flex  items-center gap-11">
//         <Link to="/login">
//           <button className="w-36 h-12 outline-none border border-gray-500 rounded-full text-red-700 font-medium text-xl bg-white cursor-pointer hover:bg-red-500 hover:text-white active:bg-white active:text-gray-600 hover:scale-105 transition duration-600">
//             Login
//           </button>
//         </Link>
//         <div className="flex  flex-col items-center justify-center  ">
//           <div className="w-5 h-5 flex items-center justify-center  rounded-full text-sm bg-red-500 text-white ">
//             0
//           </div>
//           <Link to="/cart">
//             <img
//               src={cart_icon}
//               alt=""
//               className="hover:scale-105 transition duration-600"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext"; // Import the ShopContext
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./NavbarText.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext); // Get cart items from context

  // Function to calculate total number of items in the cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className="flex justify-around p-4 shadow-[0_1px_3px_-2px_black]">
      <div className="flex items-center gap-3 hover:scale-105 transition duration-600">
        <img src={logo} alt="Logo" />
        <p className="text-neutral-900 text-3xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center justify-center list-none gap-12 text-gray-600 text-xl font-medium">
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-red-500"
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-red-500"
          onClick={() => setMenu("mens")}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-red-500"
          onClick={() => setMenu("womens")}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-red-500"
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr className="border-0 w-4/5 h-1 rounded-md bg-red-500" />}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="/login">
          <button className="w-36 h-12 outline-none border border-gray-500 rounded-full text-red-700 font-medium text-xl bg-white cursor-pointer hover:bg-red-500 hover:text-white active:bg-white active:text-gray-600 hover:scale-105 transition duration-600">
            Login
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-sm bg-red-500 text-white">
            {getCartCount()} {/* Display the total count */}
          </div>
          <Link to="/cart">
            <img
              src={cart_icon}
              alt="Cart Icon"
              className="hover:scale-105 transition duration-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
