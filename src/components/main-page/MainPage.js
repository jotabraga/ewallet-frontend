import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import MainContainer from "../standard-frameworks/MainContainer";
import NameContainer from "../standard-frameworks/NameContainer";
import { IoExitOutline } from "react-icons/io5";
import styled from "styled-components";
import UserContext from "../UserContext";
import axios from "axios";
import Entry from './Entry';

export default function MainPage() {

  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const {user, setUser} = useContext(UserContext);
  

  useEffect(() => {

    if(!user.token){
      return history.push("/");
    }

    const config = {headers: {Authorization: `Bearer ${user?.token}`}};

    const request = axios.get("http://localhost:4000/transactions" , config);

    request.then((res) => {
      setTransactions(res.data.infoToShow);
      setTotal(res.data.balance);      
    });

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
        <Link to="/">
          <IoExitOutline size="26px" color="white" onClick={logOut}/>
        </Link>

      </NameContainer>

      <Records>
        {transactions.length > 0 ? (
          <div>
            <ul>
              {transactions.map((entry, index) => (
                <Entry key={index} {...entry} />
              ))}
            </ul>
            <Total total={total}>
              <span>Saldo</span>
              <span>{(total / 100).toFixed(2).replace(".", ",")}</span>
            </Total>
          </div>
        ) : (
          <span>
            <p>
              Não há registros de<br></br>entrada ou saída
            </p>
          </span>
        )}
      </Records>

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
const Records = styled.div`
  padding: 23px 12px 12px;
  height: 446px;
  width: 326px;
  background: #ffffff;
  border-radius: 5px;
  font-family: Raleway;
  & > span {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      color: #868686;
      text-align: center;
    }
  }
  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
      width: 100%;
      font-size: 19px;
      overflow-y: scroll;
    }
  }
`;

const Total = styled.span`
  margin-top: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  & > span:first-child {
    font-weight: bold;
    font-size: 17px;
  }
  & > span:last-child {
    color: ${(props) => {
      if (props.total > 0) {
        return "green";
      } else if (props.total < 0) {
        return "red";
      }
    }};
  }
`;