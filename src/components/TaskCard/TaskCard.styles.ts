import styled from 'styled-components';

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

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  &:hover {
    color: #007BFF;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336; // Vermelho
  color: white; // Texto branco
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #da190b; // Vermelho escuro
    color: white;
  }
`;
