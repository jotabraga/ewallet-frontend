import MainContainer from "../standard-frameworks/MainContainer";
import FormContainer from "../standard-frameworks/FormContainer";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";


export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [pictureUrl, setPictureurl] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    function register(e){

        e.preventDefault();
        
        setDisabled(true);
        
        const body = {email, password, name, pictureUrl};

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", body);

        request.then((e) => history.push("/"));

        request.catch(e => {
            setDisabled(false);           
            alert("Erro: " + e.response.status + ", " + e.response.data.message);      
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
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
