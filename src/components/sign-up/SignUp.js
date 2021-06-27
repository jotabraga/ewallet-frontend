import MainContainer from "../standard-frameworks/MainContainer";
import FormContainer from "../standard-frameworks/FormContainer";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reapeatPassword, setRepeatPassword] = useState("");
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    function register(e){

        e.preventDefault();
        
        setDisabled(true);

        if( password !== reapeatPassword){
          setDisabled(false);
          return alert("Confirme a senha inserida corretamente");
        }
        
        const body = {name, email, password};

        const request = axios.post("http://localhost:4000/register", body);

        request.then((e) => history.push("/"));

        request.catch(e => {
            console.log("aqui");
            setDisabled(false);           
            console.log(e);     
        });
    }

    return(
        <MainContainer>
        <FormContainer>
          <form onSubmit={register}>
            <h1>MyWallet</h1>

            <input
              type="text"
              required
              placeholder="Nome"
              disabled={disabled}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <input
              type="email"
              required
              placeholder="E-mail"
              disabled={disabled}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="password"
              required
              placeholder="Senha"
              disabled={disabled}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              required
              placeholder="Confirme a senha"
              disabled={disabled}
              value={reapeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
  
            <button type="submit" disabled={disabled}>
              Cadastrar
            </button>
  
            <Link to={"/"}>
              <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
          </form>
        </FormContainer>
      </MainContainer>
    );
}
