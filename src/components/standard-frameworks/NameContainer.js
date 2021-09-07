import styled from "styled-components";

export default styled.div`
  display: flex;
  width: 326px;
  align-itens: center;
  justify-content: ${(props) => props.justify};
  margin: 20px 0px;
  span {
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    color: white;
    font-weight: bold;
  }
`;
