import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  width: 90%;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: auto;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 5px;

  &:hover {
    color: #007BFF;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 3px;
  }
`;

export const Priority = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const DeleteButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #da190b;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
    margin: 2px;
  }
`;

export const EditButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #da190b;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
    margin: 2px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;
