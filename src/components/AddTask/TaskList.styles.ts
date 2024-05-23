import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalHeader = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 34px;
  text-align: center;
`;

export const ModalContent = styled.div`
  position: relative;
  font-family: 'Roboto', sans-serif;
  background-color: white;
  padding: 30px;
  border-radius: 4px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }

  form {
    width: 100%;

    .input-group:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-bottom: 10px;
      font-size: 18px;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    input[name="title"], textarea[name="content"] {
      height: 50px;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;
