import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carrinho from "../src/pages/carrinho";
import Home from "../src/pages/home";
import App from "../src/App";


const routerApp = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [{
      path: "/", element: <Home/>
    },
  {
    path: "carrinho", element: <Carrinho/>
  }]
  },

  ]
  ) 

function MainRouter() {
  return (
    <RouterProvider router={routerApp}/>
  )
}

export default MainRouter;