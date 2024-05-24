import { Dispatch, SetStateAction } from "react";
import { Task, Tasks } from "../../../types/task";

export const openEditModal = (
  task: Task,
  setEditTask: Dispatch<SetStateAction<Task | null>>,
  setModalColumn: Dispatch<SetStateAction<keyof Tasks | null>>
) => {
  setEditTask(task);
  setModalColumn(task.column);
};
