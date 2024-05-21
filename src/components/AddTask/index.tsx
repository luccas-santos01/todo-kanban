import { useState, ChangeEvent, FormEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  SubmitButton,
} from "./TaskList.styles";

interface AddTaskProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ modalIsOpen, closeModal }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ title, content, type });
    closeModal();
  };

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      case "type":
        setType(value);
        break;
    }
  };

  return (
    <Modal isOpen={modalIsOpen}>
      <ModalContent>
        <ModalHeader>Adicionar tarefa</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Título:</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Conteúdo:</label>
              <textarea
                name="content"
                value={content}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Tipo:</label>
              <select
                name="type"
                value={type}
                onChange={handleInputChange}
                required
              >
                <option value="">Prioridade</option>
                <option value="tipo1">Alta</option>
                <option value="tipo2">Média</option>
                <option value="tipo3">Baixa</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
          <SubmitButton type="submit">Criar tarefa</SubmitButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
