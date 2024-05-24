import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 20vh;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 769px) {
    flex-direction: row;
    height: 80vh;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 0 10px 20px 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 769px) {
    width: 400px;
    height: 75vh;
    overflow: auto;
  }
`;

export const Header = styled.h2`
  align-self: center;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TaskButton = styled.button`
  align-self: center;
  width: 100%;
  height: 40px;
  margin-top: auto;
  background-color: black;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 35px;
    font-size: 14px;
  }
`;

export const ColumnContent = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: calc(100% - 60px);
  padding-bottom: 10px;

  @media (max-width: 768px) {
    max-height: none;
  }
`;
