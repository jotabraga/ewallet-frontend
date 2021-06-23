import styled from "styled-components";

export default styled.div` 
width: 326px;
height: 100vh;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-itens: center;
justify-content: center;   

form{
    width: 100%;
    display flex;
    flex-direction: column;
    align-itens: center;
    align-text: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 28px;
        text-align: center;
    }
    h2{
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        text-align: center;  
        margin-top: 32px;
    }
    input{
        width: 326px;
        height: 58px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: none;
        background: #fff;
        color: #000;  
        padding-left: 15px; 
        font-size: 20px;
    }    
    button{
        width: 326px;
        height: 46px;
        border-radius: 5px;
        background: #A328D6;
        color: #fff;
        font-size: 20px;
        border: none;    
    }
}`;