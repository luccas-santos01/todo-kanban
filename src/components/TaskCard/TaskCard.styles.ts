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
