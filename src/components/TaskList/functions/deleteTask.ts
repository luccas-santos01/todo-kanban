import { Dispatch, SetStateAction } from "react";
import { Tasks } from "../../../types/task";

export const deleteTask = (
  id: string,
  setTasks: Dispatch<SetStateAction<Tasks>>
) => {
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
