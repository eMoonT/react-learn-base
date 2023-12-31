import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from './store'
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router"

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <div>test test</div>
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App />
  </Provider>
  // </React.StrictMode>,
);
