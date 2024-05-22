import { useState, FC } from "react";
import AddTask from "../AddTask";
import {
  Column,
  Header,
  TaskButton,
  TaskListContainer,
  Card,
  Title,
  Priority,
  ColumnContent, // Importe o novo componente estilizado
} from "./TaskList.styles";

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <Card>
      <Title>{task.title}</Title>
      <Priority>Prioridade: {task.type}</Priority>
    </Card>
  );
};

const TaskList: FC = () => {
  const [modalColumn, setModalColumn] = useState<keyof Tasks | null>(null);
  const [tasks, setTasks] = useState<Tasks>({
    todo: [],
    inProgress: [],
    done: [],
  });

  const addTask = (column: keyof Tasks, task: Task) => {
    setTasks((oldTasks) => ({
      ...oldTasks,
      [column]: [...oldTasks[column], task],
    }));
    setModalColumn(null);
  };

  const openModal = (column: keyof Tasks) => {
    setModalColumn(column);
  };

  return (
    <TaskListContainer>
      <Column>
        <Header>A fazer</Header>
        <ColumnContent>
          {tasks.todo.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </ColumnContent>
        <TaskButton onClick={() => openModal("todo")}>
          + Adicionar Tarefa
        </TaskButton>
        {modalColumn === "todo" && (
          <AddTask
            modalIsOpen={modalColumn === "todo"}
            closeModal={() => setModalColumn(null)}
            addTask={(task: Task) => addTask("todo", task)}
            column="todo"
          />
        )}
      </Column>
      <Column>
        <Header>Em andamento</Header>
        <ColumnContent>
          {tasks.inProgress.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </ColumnContent>
        <TaskButton onClick={() => openModal("inProgress")}>
          + Adicionar Tarefa
        </TaskButton>
        {modalColumn === "inProgress" && (
          <AddTask
            modalIsOpen={modalColumn === "inProgress"}
            closeModal={() => setModalColumn(null)}
            addTask={(task: Task) => addTask("inProgress", task)}
            column="inProgress"
          />
        )}
      </Column>
      <Column>
        <Header>Feito</Header>
        <ColumnContent>
          {tasks.done.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </ColumnContent>
        <TaskButton onClick={() => openModal("done")}>
          + Adicionar Tarefa
        </TaskButton>
        {modalColumn === "done" && (
          <AddTask
            modalIsOpen={modalColumn === "done"}
            closeModal={() => setModalColumn(null)}
            addTask={(task: Task) => addTask("done", task)}
            column="done"
          />
        )}
      </Column>
    </TaskListContainer>
  );
};

export default TaskList;
