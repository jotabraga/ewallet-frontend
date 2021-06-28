import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import { IoExitOutline } from "react-icons/io5";
import styled from "styled-components";
import UserContext from "../UserContext";
import axios from "axios";

export default function MainPage() {

  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const {user, setUser} = useContext(UserContext);
  

  useEffect(() => {

    if(!user.token){
      return history.push("/");
    }

    const config = {headers: {Authorization: `Bearer ${user?.token}`}};

    const request = axios.get("http://localhost:4000/transactions" , config);

    request.then((res) => setTransactions(res.data));

    request.catch((e) => console.log(e));

  }, [user, history]);

  function logOut(){  
    
    const config = {headers: {Authorization: `Bearer ${user?.token}`}};

		const request = axios.post('http://localhost:4000/logout', [], config)
    request.then((res) => {
      setUser(null);
      history.push("/");
    })
    request.catch((e) => console.log(e));
  }

  return (
    <MainContainer>
      <NameContainer justify="space-between" >
        <span>Olá, {user.name}</span>
        <IoExitOutline size="26px" color="white" onClick={logOut}/>
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