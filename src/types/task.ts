export interface Task {
  id: string;
  title: string;
  type: string;
}

export interface Tasks {
  "A Fazer": Task[];
  "Em Progresso": Task[];
  "Feito": Task[];
}
export interface TaskCardProps {
  task: Task;
}

export interface TaskToAdd {
  id: string;
  title: string;
  content: string;
  type: string;
  column: keyof Tasks;
}

export interface AddTaskProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  addTask: (task: TaskToAdd) => void;
  column: keyof Tasks;
}
