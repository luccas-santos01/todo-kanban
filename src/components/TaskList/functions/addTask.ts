import { TaskToAdd, Tasks } from "../../../types/task";
import { Dispatch, SetStateAction } from "react";

export const addTask = (
  column: keyof Tasks,
  task: TaskToAdd,
  setTasks: Dispatch<SetStateAction<Tasks>>,
  setModalColumn: Dispatch<SetStateAction<keyof Tasks | null>>
) => {
  setTasks((oldTasks) => ({
    ...oldTasks,
    [column]: [...oldTasks[column], task],
  }));
  setModalColumn(null);
};
