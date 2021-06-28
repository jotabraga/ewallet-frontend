import MainContainer from "../standard-frameworks/MainContainer";
import FormContainer from "../standard-frameworks/FormContainer";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";

export default function LogIn() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const { setUser } = useContext(UserContext);

  function login(e) {

    e.preventDefault();
    
    setDisabled(true);

    const body = { email, password };

    const request = axios.post("http://localhost:4000/log-in", body);

    request.then((response) => {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/main");
    });

    request.catch((e) => {
      setDisabled(false);
      console.log(e);
    });
  }

  return (
    <MainContainer>
      <FormContainer>
        <form onSubmit={login}>
          <h1>MyWallet</h1>

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

          <button type="submit" disabled={disabled}>
            Entrar
          </button>

          <Link to={"/sign-up"}>
            <h2>Primeira vez? Cadastre-se!</h2>
          </Link>
        </form>
      </FormContainer>
    </MainContainer>
  );
}
