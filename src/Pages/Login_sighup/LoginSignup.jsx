// import React from "react";

// const LoginSignup = () => {
//   return (
//     <div className="loginsignup w-full h-[80vh] bg-custom-pink pt-[100px]">
//       <div className="loginsignup-container w-[500px] h-[600px] bg-white mx-auto p-[40px_60px]">
//         <h1 className="my-[20px]">Sigh Up</h1>
//         <div className="loginsigmup-fields flex flex-col gap-7 mt-7">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Emaim Address" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">
//           Already have an account: <span>Login</span>
//           <div className="loginsignup-agree">
//             <input type="checkbox" />
//             <p>B countinuing , i agree to the terms of use $ privacy policy.</p>
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup w-full h-screen bg-pink-200 pt-[80px] flex justify-center items-center">
      <div className="loginsignup-container w-[400px] h-[500px] bg-white mx-auto p-[30px_50px] rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold pb-[20px] text-center">
          Sign Up
        </h1>
        <div className="loginsignup-fields flex flex-col gap-5 pt-5 pb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="pb-2">
          <button className="w-full py-3  bg-red-500 text-white font-semibold rounded-lg mt-4 hover:bg-blue-600 transition">
            Continue
          </button>
        </div>
        <p className="text-center p-2">
          Already have an account?
          <span className="text-red-500 cursor-pointer ">Login</span>
        </p>
        <div className="loginsignup-agree flex items-center pt-5">
          <div>
            <input type="checkbox" />
          </div>
          <p className="text-sm">
            By continuing, I agree to the{" "}
            <span className="text-red-500 cursor-pointer">Terms of Use</span> &{" "}
            <span className="text-red-500 cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
