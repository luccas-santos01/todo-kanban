import { Dispatch, SetStateAction } from "react";
import { Tasks, Task } from "../../../types/task";

export const updateTask = (
  task: Task,
  setTasks: Dispatch<SetStateAction<Tasks>>
) => {
  setTasks((oldTasks) => {
    const columnTasks = [...oldTasks[task.column]];
    const taskIndex = columnTasks.findIndex((t) => t.id === task.id);

    if (taskIndex === -1) {
      return oldTasks;
    }

    columnTasks[taskIndex] = task;

    return {
      ...oldTasks,
      [task.column]: columnTasks,
    };
  });
};
