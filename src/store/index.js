import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});
export default store;
