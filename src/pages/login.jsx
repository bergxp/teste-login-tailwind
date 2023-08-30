// import { Container } from './styles';

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  document.title = "Login";
  const [users, setusers] = useState([]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const data = localStorage.getItem("dados");
    if (data) {
      setusers(JSON.parse(data));
    }
  }, []);
  const auth = (user) => {
    const login = users.find((usuario) => usuario.email == user.email);

    if (login) {
      const senhaCorreta = login.senha === user.senha;
      if (senhaCorreta) {
        alert("Usuario encontrado!");
      } else {
        alert("Email ou senha incorretos!");
      }
    }
  };

  return (
    <div className="max-w-7xl h-[calc(100vh-80px)] m-auto flex justify-center items-center">
      <div className="rounded-xl p-5 w-96 h-480 shadow-lg shadow-orange-400 flex flex-col items-center border-t-4 border-orange-400">
        <div className="text-3xl font-bold text-orange-400 my-7">
          <span>Login</span>
        </div>
        <form
          action="#"
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit(auth)}
        >
          <input
            className="p-2 rounded-lg border"
            type="text"
            {...register("email")}
            placeholder="Email"
          />
          <input
            className="p-2 rounded-lg border "
            type="password"
            placeholder="Password"
            {...register("senha")}
          />
          <div className="flex w-full justify-center items-center gap-2">
            <input className="" type="checkbox" name="lembre" id="lembre" />
            <label htmlFor="lembre">Lembre-me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 p-3 rounded-xl mb-5 hover:bg-orange-600 transition-all delay-100 font-bold"
          >
            Login
          </button>
        </form>
        <span className="italic">logar com</span>
        <div className="w-full flex justify-around my-2">
          <button className="p-2 px-5 rounded-lg border bg-red-500 text-red-50">
            Google
          </button>
          <button className="p-2 px-5 rounded-lg border bg-blue-500 text-red-50">
            Linkedin
          </button>
        </div>
        <Link to="cadastro">
          {"  "}
          <span className="cursor-pointer mb5">Criar conta</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
