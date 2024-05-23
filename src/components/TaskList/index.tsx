// TaskList.tsx
import { useState, FC } from "react";
import AddTask from "../AddTask";
import { Task, TaskToAdd, Tasks } from "../../types/task";
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
  const [editTask, setEditTask] = useState<Task | null>(null);

  const addTask = (column: keyof Tasks, task: TaskToAdd) => {
    setTasks((oldTasks) => ({
      ...oldTasks,
      [column]: [...oldTasks[column], task],
    }));
    setModalColumn(null);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((oldTasks) => {
      const column = updatedTask.column;
      return {
        ...oldTasks,
        [column]: oldTasks[column].map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    });
  };

  const deleteTask = (id: string) => {
    setTasks((oldTasks) => {
      const columnNames = Object.keys(oldTasks) as (keyof Tasks)[];
      let fromColumn: keyof Tasks | undefined;

      const foundColumn = columnNames.find((column) => {
        const taskIndex = oldTasks[column].findIndex((t) => t.id === id);
        if (taskIndex !== -1) {
          return true;
        }
        return false;
      });

      fromColumn = foundColumn;

      if (!fromColumn) {
        return oldTasks;
      }

      return {
        ...oldTasks,
        [fromColumn]: oldTasks[fromColumn].filter((t) => t.id !== id),
      };
    });
  };

  const openModal = (column: keyof Tasks) => {
    setModalColumn(column);
  };

  const closeModal = () => {
    setEditTask(null);
    setModalColumn(null);
  };

  const moveTask = (id: string, direction: "left" | "right") => {
    setTasks((oldTasks) => {
      const columnNames = Object.keys(oldTasks) as (keyof Tasks)[];
      let task: Task | undefined;
      let fromColumn: keyof Tasks | undefined;
      let toColumn: keyof Tasks | undefined;

      const foundColumn = columnNames.find((column) => {
        const taskIndex = oldTasks[column].findIndex((t) => t.id === id);
        if (taskIndex !== -1) {
          task = oldTasks[column][taskIndex];
          return true;
        }
        return false;
      });

      fromColumn = foundColumn;

      if (!task || !fromColumn) {
        return oldTasks;
      }

      const columnIndex = columnNames.indexOf(fromColumn);
      if (direction === "left" && columnIndex > 0) {
        toColumn = columnNames[columnIndex - 1];
      } else if (
        direction === "right" &&
        columnIndex < columnNames.length - 1
      ) {
        toColumn = columnNames[columnIndex + 1];
      }

      if (!toColumn) {
        return oldTasks;
      }
      return {
        ...oldTasks,
        [fromColumn]: oldTasks[fromColumn].filter((t) => t.id !== id),
        [toColumn]: [...oldTasks[toColumn], { ...task, column: toColumn }],
      };
    });
  };

  const openEditModal = (task: Task) => {
    setEditTask(task);
    setModalColumn(task.column);
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
                moveTask={moveTask}
                openEditModal={openEditModal}
                deleteTask={deleteTask}
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
              addTask={(task: TaskToAdd) => addTask(key, task)}
              updateTask={updateTask}
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
