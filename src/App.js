import "./App.css";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import { RouterProvider } from "react-router";
import router from "./Routes/routes";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
