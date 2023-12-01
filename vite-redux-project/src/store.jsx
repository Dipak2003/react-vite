import { configureStore } from "@reduxjs/toolkit";

// simple counter
import SimpleFeatures from "./components/simple/SimpleFeatures";
export const store = configureStore({
  reducer: {
    simplecounter: SimpleFeatures,
  },
});
