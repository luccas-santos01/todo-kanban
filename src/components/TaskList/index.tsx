import AddTask from "../AddTask";
import { useState } from "react";
import { Column, Header, TaskButton, TaskListContainer } from "./TaskList.styles";

const TaskList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <TaskListContainer>
      <Column>
        <Header>A fazer</Header>
        <TaskButton onClick={openModal}>Adicionar tarefa</TaskButton>
      </Column>
      <Column>
        <Header>Em andamento</Header>
        <TaskButton onClick={openModal}>Adicionar tarefa</TaskButton>
      </Column>
      <Column>
        <Header>Feito</Header>
        <TaskButton onClick={openModal}>Adicionar tarefa</TaskButton>
        <AddTask modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </Column>
    </TaskListContainer>
  );
};

export default TaskList;
