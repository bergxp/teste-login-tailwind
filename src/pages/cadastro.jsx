// import { Container } from './styles';

import {  useEffect, useState } from "react";
import {  useForm } from "react-hook-form";

function Cadastro() {
  document.title = 'Cadastro'
  const [login, setLogin] = useState([]);
  const [msgSucess , setMsgSucess] = useState()
  const [visible, setVisible] = useState(false)
  const {register, handleSubmit, reset} = useForm()
  
  useEffect(() => {
    if(!msgSucess){
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = setTimeout(() => {
     setVisible(false)
    }, 3000);
    return () => clearTimeout(timer)
  },[msgSucess])

  
  useEffect(() => {
    const data = localStorage.getItem("dados");
    if (data) {
      setLogin(JSON.parse(data));
    }
  }, []);

  const updateLogin = (login) => {
    localStorage.setItem("dados", JSON.stringify(login))
  }

  const  setCadastro = (cad) => {

    const cadastro = cad
    const emailExists = login.find(item => item.email == cadastro.email)
    // const senhaExists = login.find(item => item.senha != cadastro.password)
 
    if (emailExists){
      alert("Email já cadastrado")
      return 
    }
    if (cadastro.senha !== cadastro.password) {
      alert("As senhas são diferentes");
      return; // Não limpa o formulário se as senhas forem diferentes

    }else{
      
      setMsgSucess("Usuario criado com sucesso !")
      setLogin([...login, cadastro])
      updateLogin([...login, cadastro])
    }
    reset()
  }
  return (

    <div className="max-w-7xl h-[calc(100vh-80px)] m-auto flex justify-center items-center flex-col">

        {visible && <span className="w-full bg-green-400 text-lg text-center text-white p-2 rounded-md my-2">{msgSucess}</span> }

           <div className="w-2/6 m-auto p-5 flex flex-col shadow-2xl rounded-xl  border-orange-500 border-t-4 border-l-4">
           <span className="text-center font-bold text-xl my-9">Cadastre-se</span>
      <form action="#" className="flex flex-col gap-8 my-5 w-full" onSubmit={handleSubmit(setCadastro)}>
        <input className="w-full p-2 rounded-lg border" {...register("email")} placeholder="Digite seu email" required />
        <input type="password" placeholder="Digite sua senha"  {...register("senha")} className="w-full p-2 rounded-lg border" required />
        <input type="password" placeholder="Confirme sua senha"{...register("password")} className="w-full p-2 rounded-lg border" required />
        <div className="w-full flex justify-center">
 <button type="submit" className="p-3 bg-orange-500 rounded-lg text-white">Finalizar Cadastro</button>
        </div>
     
      </form>
      </div>
    </div>
  );
  
}

export default Cadastro;
