import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [
      {
        id: 0,
        title: "Tokyo",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vitae.",
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 1,
        title: "New York",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vitae.",
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
      {
        id: 2,
        title: "Roma",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vitae.",
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 3,
        title: "Parigi",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vitae.",
        imgUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
