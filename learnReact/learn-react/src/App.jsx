// import User from "./User";

// const App = () => {
//   let name = "Raunak";
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>Welcome to my React app.</p>
//       <p>It's Js Operation as 1+1 = {1 + 1}</p>
//       {/* default location public folder lai nai linxa img tag le */}
//       <img src="./IMG_1543.jpg" alt="Random Image" />
//       {/* React ma inline css dina parda object ko form ma dina parxa */}
//       <p style={{ backgroundColor: "green", color: "white" }}>
//         It's a success message
//       </p>

//       <p className = "success">Product Create Successfully</p>
//       <p className = "error">Unable to Create product</p>

//       <User></User>
//       <Product></Product>

//     </div>
//   );
// };

// export default App;


import SunwayNavLink from "./SunwayNavLink";
import User from "./User";

const App = () => {
  return <div>
    <SunwayNavLink></SunwayNavLink>
  </div>;
};

export default App;
