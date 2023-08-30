import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carrinho from "../src/pages/carrinho";
import Home from "../src/pages/home";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/cadastro.jsx";

async function isLogged(){
    
  const usertoken = localStorage.getItem('dados')

  if(usertoken === undefined || usertoken === null || usertoken === ""){
      window.location.replace("/")
  }

  try{
    console.log(usertoken)
  
  }catch (error){
      console.log(error)
  }
}

function PrivateRoute( {children} ){

  return isLogged() ? children : window.location.replace('/')

} 

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "carrinho",
        element: <PrivateRoute> <Carrinho /> </PrivateRoute> ,
      },
      {
        path: "login", element: <Login/>
      },
      {
        path: "login/cadastro", element: <Cadastro/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerApp} />
  </React.StrictMode>
);
