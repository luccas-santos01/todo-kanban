import { useState, FC } from "react";
import AddTask from "../AddTask";
import { Task, Tasks } from "../../types/task";
import TaskCard from "../TaskCard";
import {
  Column,
  Header,
  TaskButton,
  TaskListContainer,
  ColumnContent,
} from "./TaskList.styles";

const columnOrder: (keyof Tasks)[] = ["A Fazer", "Em Progresso", "Feito"];

const TaskList: FC = () => {
  const [modalColumn, setModalColumn] = useState<keyof Tasks | null>(null);
  const [tasks, setTasks] = useState<Tasks>({
    "A Fazer": [],
    "Em Progresso": [],
    Feito: [],
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
      {columnOrder.map((key) => (
        <Column key={key}>
          <Header>{key}</Header>
          <ColumnContent>
            {tasks[key].map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ColumnContent>
          <TaskButton onClick={() => openModal(key)}>
            + Adicionar Tarefa
          </TaskButton>
          {modalColumn === key && (
            <AddTask
              modalIsOpen={modalColumn === key}
              closeModal={() => setModalColumn(null)}
              addTask={(task: Task) => addTask(key, task)}
              column={key}
            />
          )}
        </Column>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
