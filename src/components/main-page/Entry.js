import styled from "styled-components";

export default function Entry(props) {
  const { date, description, amount, type } = props;
  const valueFormated = String((amount / 100).toFixed(2)).replace(".", ",");
  return (

    <EntryRow Type={type}>
      <span>
        <span>{date}</span>
        <span>{description}</span>
      </span>
      <span>{valueFormated}</span>
    </EntryRow>
	
  );
}

const EntryRow = styled.li`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  text-overflow: ellipsis;
  & > span:first-child {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span:first-child {
      color: #c6c6c6;
      margin-right: 10px;
    }
  }
  & > span:last-child {
    margin-left: 5px;
    color: ${(props) => (props.Type === "deposit" ? "#03AC00" : "#C70000")};
  }
`;