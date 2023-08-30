import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="bg-orange-400 font-poppins w-full h-20">
        <div className="max-w-7xl m-auto flex justify-between items-center font-extrabold">
        <Link to="/">
              {" "} <span className="p-5">Logo</span>
              </Link>
          <ul className="flex justify-evenly gap-3 items-center ">
            <Link to="/">
              {" "}
              <li className="p-5 cursor-pointer hover:bg-orange-300 rounded-2xl transition ease-in-out delay-150 duration-300 ">
                Home
              </li>
            </Link>
            <Link to="carrinho">
              <li className="p-5 cursor-pointer hover:bg-orange-300 rounded-2xl transition delay-150 duration-150 ease-in-out ">
                Carrinho
              </li>
            </Link>
            <Link to="pizza">
              <li className="p-5 cursor-pointer hover:bg-orange-300 rounded-2xl transition delay-150 duration-150 ease-in-out ">
                Adicionar Pizza
              </li>
            </Link>
            <li className="p-5">
              <input
                className="p-1 px-4 rounded-xl font-normal"
                type="text"
                placeholder="Pesquisar..."
                name="search"
              />
            </li>
            <Link to="login">
              <li className="p-5 cursor-pointer hover:bg-orange-300 rounded-2xl transition delay-150 duration-150 ease-in-out ">
              Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
