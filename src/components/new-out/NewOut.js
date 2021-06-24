import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import FormContainer from "../standard-frameworks/FormContainer";

export default function MainPage() {
  const [value, setValue] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <MainContainer>
      <NameContainer justify="left">
        <span>Nova saida</span>
      </NameContainer>

      <FormContainer position="start" top="40px">
        <form>
          <input
            type="number"
            required
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
