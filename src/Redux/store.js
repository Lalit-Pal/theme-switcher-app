import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfiguration = {
  key: "themeSelector",
  storage,
};
const store = configureStore({
  reducer: {
    themeSelector: persistReducer(persistConfiguration, themeSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
