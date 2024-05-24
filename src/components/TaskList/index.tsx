import { useState, FC } from "react";
import AddTask from "../AddTask";
import { Task, TaskToAdd, Tasks } from "../../types/task";
import TaskCard from "../TaskCard";
import { addTask } from "./functions/addTask";
import { deleteTask } from "./functions/deleteTask";
import { moveTask } from "./functions/moveTask";
import { openEditModal } from "./functions/openEditModal";
import { updateTask } from "./functions/updateTask";
import {
  Column,
  Header,
  TaskButton,
  TaskListContainer,
  ColumnContent,
} from "./TaskList.styles";

type Column = 'A Fazer' | 'Em Progresso' | 'Feito';
const columnOrder: Column[] = ['A Fazer', 'Em Progresso', 'Feito'];

const TaskList: FC = () => {
  const [modalColumn, setModalColumn] = useState<Column | null>(null);
  const [tasks, setTasks] = useState<Tasks>({
    "A Fazer": [],
    "Em Progresso": [],
    Feito: [],
  });
  const [editTask, setEditTask] = useState<Task | null>(null);

  const openModal = (column: Column) => {
    setModalColumn(column);
  };

  const closeModal = () => {
    setModalColumn(null);
  };

  return (
    <TaskListContainer>
      {columnOrder.map((key) => (
        <Column key={key}>
          <Header>{key}</Header>
          <ColumnContent>
            {tasks[key].map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                moveTask={(id: string, direction: "left" | "right") =>
                  moveTask(id, direction, setTasks)
                }
                openEditModal={(task: Task) =>
                  openEditModal(task, setEditTask, setModalColumn)
                }
                deleteTask={(id: string) => deleteTask(id, setTasks)}
              />
            ))}
          </ColumnContent>
          <TaskButton onClick={() => openModal(key)}>
            + Adicionar Tarefa
          </TaskButton>
          {modalColumn === key && (
            <AddTask
              modalIsOpen={modalColumn === key}
              closeModal={closeModal}
              addTask={(task: TaskToAdd) =>
                addTask(key, task, setTasks, setModalColumn)
              }
              updateTask={(task: Task) => updateTask(task, setTasks)}
              column={key}
              editTask={editTask}
            />
          )}
        </Column>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
