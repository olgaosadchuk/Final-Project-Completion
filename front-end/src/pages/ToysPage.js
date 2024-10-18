
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart, fetchToys, deleteToy } from "../redux/toysSlice";

// function ProductsPage() {
//   const dispatch = useDispatch();
//   const toys = useSelector((state) => state.toys.toys);
//   const status = useSelector((state) => state.toys.status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchToys());
//     }
//   }, [status, dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteToy(id));
//   };

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   } else if (status === "failed") {
//     return <div>Error loading items</div>;
//   }

//   return (
//     <div>
//       <h1 className="title">KIDS Toys</h1>
//       <div className="products-grid">
//         {toys.map((toy) => (
//           <div key={toy.id} className="product-card">
//             <img src={toy.image} alt={toy.title} />
//             <p className="toy-name">{toy.name}</p>
//             <p>{toy.description}</p>
//             <p>${toy.price}</p>
//             <button onClick={() => dispatch(addToCart(toy))}>
//               Add to cart
//             </button>
//             <button onClick={() => handleDelete(toy.id)}>
//               Delete
//             </button>
//             <Link to="/checkout">Go to Checkout</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsPage;


/////////////////
////////////////

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, fetchToys, deleteToy } from "../redux/toysSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const toys = useSelector((state) => state.toys.toys);
  const status = useSelector((state) => state.toys.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchToys());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteToy(id));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error loading items</div>;
  }

  return (
    <div>
      <h1 className="title">KIDS Toys</h1>
      <div className="products-grid">
        {toys.map((toy) => (
          <div key={toy.id} className="product-card">
            <img src={toy.image} alt={toy.title} />
            <p className="toy-name">{toy.name}</p>
            <p>{toy.description}</p>
            <p>${toy.price}</p>
            <button onClick={() => dispatch(addToCart(toy))}>
              Add to cart
            </button>
            <button onClick={() => handleDelete(toy.id)}>
              Delete
            </button>
            {/* Link to the edit form, passing the toy ID */}
            <Link to={`/edit-toy/${toy.id}`}>Edit</Link>
          </div>
        ))}
      </div>
      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
}

export default ProductsPage;