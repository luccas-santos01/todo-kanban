import { Dispatch, SetStateAction } from "react";
import { Tasks, Task } from "../../../types/task";

export const moveTask = (
  id: string,
  direction: "left" | "right",
  setTasks: Dispatch<SetStateAction<Tasks>>
) => {
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
