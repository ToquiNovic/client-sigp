import { createSlice } from "@reduxjs/toolkit";
const physicalResourceSlice = createSlice({
  name: "physicalResource",
  initialState: {
    physicalResource: [],
    physicalResourceLoading: false,
  },
  reducers: {
    setPhysicalResource: (state, action) => {
      state.physicalResource = action.payload;
    },
    setPhysicalResourceLoading: (state, action) => {
      state.physicalResourceLoading = action.payload;
    },
  },
});

export const { setPhysicalResource, setPhysicalResourceLoading } =
  physicalResourceSlice.actions;

export default physicalResourceSlice.reducer;
