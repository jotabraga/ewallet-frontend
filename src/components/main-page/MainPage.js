import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import { IoExitOutline } from "react-icons/io5";
import styled from "styled-components";

export default function MainPage() {
  return (
    <MainContainer>
      <NameContainer justify="space-between" >
        <span>Olá, Fulano</span>
        <IoExitOutline size="26px" color="white" />
      </NameContainer>

      <Balance>
       
      Não há registros de entrada ou saída
     
      </Balance>

      <AddRecord>
        <Link to="/new-income">
            <NewRecord>
            <AiOutlinePlusCircle size="25px" />
            Nova entrada
            </NewRecord>
        </Link>
        <Link to="/new-expense">
            <NewRecord>
            <AiOutlineMinusCircle size="25px" />
            Nova saida
            </NewRecord>
      </Link>

      </AddRecord>


    </MainContainer>
  );
}



const Balance = styled.textarea`
  width: 326px;
  height: 446px;
  border-radius: 5px;
  border: none;
  background: #fff;
  color: #868686;
  span{
      font-size: 20px;
      align: center;
  }
`;
const NewRecord = styled.button` 
  width: 155px;
  height: 114px;
  background: #A328D6;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-itens: left;
  padding: 11px;
  border: none;
`;
const AddRecord = styled.div` 
  margin-top: 13px;
  display: flex;
  width: 326px;
  justify-content: space-between;
`;