// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => (
//   <div className="container-home">
//     <h1 className="title-home">KIDS TOYS</h1>
//     <Link to="/toys" style={{ color: "white", fontSize: "40px" }}>
//       <div className="title-toys"><h2>Go to Toys</h2></div>
//     </Link>
//   </div>
// );

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container-home">
    <h1 className="title-home">KIDS TOYS</h1>
    <Link to="/toys" style={{ color: "white", fontSize: "40px" }}>
      <div className="title-toys"><h2>Go to Toys</h2></div>
    </Link>
    {/* Button to create a new toy */}
    <Link to="/create-toy" style={{ color: "white", fontSize: "40px", marginTop: '20px', display: 'inline-block' }}>
      <div className="create-toy"><h2>Create a New Toy</h2></div>
    </Link>
  </div>
);

export default HomePage;