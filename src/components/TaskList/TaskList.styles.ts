import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin-top: 20vh;
  font-family: 'Roboto', sans-serif;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 400px;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 75vh;
  overflow: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.h2`
  align-self: center;
`;

export const TaskButton = styled.button`
  align-self: center;
  width: 100%;
  height: 40px;
  margin-top: auto;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ColumnContent = styled.div`
  overflow-y: auto;
  max-height: 60vh;
`;
