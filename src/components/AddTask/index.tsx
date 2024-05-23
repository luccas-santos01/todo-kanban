import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import closeIcon from "../../assets/close.png";
import { v4 as uuidv4 } from "uuid";
import { AddTaskProps } from "../../types/task";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  CloseButton,
  SubmitButton,
} from "./TaskList.styles";

const AddTask: React.FC<AddTaskProps> = ({
  modalIsOpen,
  closeModal,
  addTask,
  updateTask,
  column,
  editTask,
}) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<"Baixa" | "Média" | "Alta">("Baixa");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setType(editTask.type);
    } else {
      setTitle("");
      setType("Baixa");
    }
  }, [editTask]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (editTask) {
      updateTask({ ...editTask, title, type, column });
    } else {
      addTask({ id: uuidv4(), title, type, column });
    }
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
      case "type":
        setType(value as "Baixa" | "Média" | "Alta");
        break;
    }
  };

  return (
    <Modal isOpen={modalIsOpen}>
      <ModalContent>
        <ModalHeader>
          {editTask ? "Editar tarefa" : "Adicionar tarefa"}
        </ModalHeader>
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
              <label>Priodidade:</label>
              <select
                name="type"
                value={type}
                onChange={handleInputChange}
                required
              >
                <option value="">Prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>
            <ModalFooter>
              <CloseButton type="button" onClick={closeModal}>
                <img src={closeIcon} alt="Fechar" />
              </CloseButton>
              <SubmitButton type="submit">
                {editTask ? "Salvar tarefa" : "Criar tarefa"}
              </SubmitButton>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
