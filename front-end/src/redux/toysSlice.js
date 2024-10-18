// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchToys = createAsyncThunk(
//     'toys/fetchToys',
//     async () => {
        
//         const response = await fetch('http://localhost:5000/api/toys');
//         const data = await response.json();
//         return data;
//     }
// );

// const toysSlice = createSlice({
//   name: "toys",
//   initialState: { toys: [], cart: [], status: "idle", error: null },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       const index = state.cart.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.cart.splice(index, 1);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchToys.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchToys.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.toys = action.payload;
//       })
//       .addCase(fetchToys.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addToCart, removeFromCart } = toysSlice.actions;

// export default toysSlice.reducer;


//////////////////////////
////////////////////
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch toys
export const fetchToys = createAsyncThunk(
  'toys/fetchToys',
  async () => {
    const response = await fetch('http://localhost:5000/api/toys');
    const data = await response.json();
    return data;
  }
);

// Delete toy
export const deleteToy = createAsyncThunk(
  'toys/deleteToy',
  async (id) => {
    await fetch(`http://localhost:5000/api/toys/${id}`, {
      method: 'DELETE',
    });
    return id; // Return the ID of the deleted toy
  }
);

const toysSlice = createSlice({
  name: "toys",
  initialState: { toys: [], cart: [], status: "idle", error: null },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToys.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchToys.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.toys = action.payload;
      })
      .addCase(fetchToys.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteToy.fulfilled, (state, action) => {
        state.toys = state.toys.filter(toy => toy.id !== action.payload);
      });
  },
});

export const { addToCart, removeFromCart } = toysSlice.actions;
export default toysSlice.reducer;