import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    humanData: {
      name: "",
      email: "",
      message: "",
    },
  },
  reducers: {
    setHumanData(state, action) {
      return {
        ...state,
        humanData: {
          ...state.humanData,
          [action.payload.name]: action.payload.value,
        },
      };
    },
  },
});

export const { setHumanData } = contactsSlice.actions;
export default contactsSlice.reducer;
