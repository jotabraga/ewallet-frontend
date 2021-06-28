import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import FormContainer from "../standard-frameworks/FormContainer";
import UserContext from "../UserContext";
import axios from "axios";

export default function NewIn() {
  const [amount, setAmount] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [description, setDescription] = useState("");
  const {user} = useContext(UserContext);
  const history = useHistory();

  function incomeRegister(e){

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
      type: 'deposit'
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
      <NameContainer justify="space-between">
        <span>Nova entrada</span>
        <Link to="/main">
					<BiArrowBack size="26px" color="white" />
				</Link>
      </NameContainer>

      <FormContainer position="start" top="40px">
        <form disabled={disabled} onSubmit={incomeRegister}>
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

          <button type="submit">Salvar entrada</button>
        </form>
      </FormContainer>
    </MainContainer>
  );
}
