// import Carrinho from "./pages/carrinho"
import Navbar from "./pages/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Carrinho/>
    <Home/> */}
    </>
  );
}

export default App;
