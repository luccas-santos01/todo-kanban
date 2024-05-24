import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  font-family: 'Roboto', sans-serif;

  h2 {
    margin: 0;
    padding: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 14px;
      padding: 5px;
    }
  }
`;
