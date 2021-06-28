import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import FormContainer from "../standard-frameworks/FormContainer";
import UserContext from "../UserContext";
import axios from "axios";

export default function NewOut() {

  const [amount, setAmount] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [description, setDescription] = useState("");
  const {user} = useContext(UserContext);
  const history = useHistory();

  function expenseRegister(e){

    e.preventDefault();
		setDisabled(true);

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};

		const data = {
			amount,
			description,
      type: 'expense'
		};

    console.log(data);

		const request = axios.post('http://localhost:4000/transactions', data, config);
		request.then((res) => {
				history.push('/main');
			})
		request.catch((e) => {
				console.log(e);
			});
		setDisabled(false);

  }

  return (
    <MainContainer>
      <NameContainer justify="left">
        <span>Nova saida</span>
      </NameContainer>

      <FormContainer position="start" top="40px">
        <form disabled={disabled} onSubmit={expenseRegister} >
          <input
            type="number"
            required
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type=""
            required
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Salvar saida</button>
        </form>
      </FormContainer>
    </MainContainer>
  );
}
