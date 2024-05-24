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
import { TaskPriority, TASK_PRIORITY } from "./constants";

const AddTask: React.FC<AddTaskProps> = ({
  modalIsOpen,
  closeModal,
  addTask,
  updateTask,
  column,
  editTask,
}) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<TaskPriority>(TASK_PRIORITY.LOW);

  const clearState = () => {
    setTitle("");
    setType(TASK_PRIORITY.LOW);
  };

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setType(editTask.type);
    } else {
      clearState();
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
        setType(value as TaskPriority);
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
              <label>Descrição:</label>
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
                <option value={TASK_PRIORITY.HIGH}>{TASK_PRIORITY.HIGH}</option>
                <option value={TASK_PRIORITY.MEDIUM}>
                  {TASK_PRIORITY.MEDIUM}
                </option>
                <option value={TASK_PRIORITY.LOW}>{TASK_PRIORITY.LOW}</option>
              </select>
            </div>
            <ModalFooter>
              <CloseButton type="button" onClick={closeModal}>
                <img src={closeIcon} alt="Fechar" />
              </CloseButton>
              <SubmitButton type="submit">
                {editTask ? "Salvar Tarefa" : "Criar Tarefa"}
              </SubmitButton>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
