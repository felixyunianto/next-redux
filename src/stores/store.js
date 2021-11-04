import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./store.reducer";
import thunk from "redux-thunk";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: storeReducer,
    middleware: [thunk],
    preloadedState,
    enhancers: [],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./store.reducer", () =>
      store.replaceReducer(storeReducer)
    );
  }

  return store;
}
