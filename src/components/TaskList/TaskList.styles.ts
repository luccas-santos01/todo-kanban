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
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  width: 300px;
  word-wrap: break-word;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

export const Priority = styled.p`
  margin: 0;
  color: #666;
  font-size: 16px;
`;

export const ColumnContent = styled.div`
  overflow-y: auto;
  max-height: 60vh;
`;
