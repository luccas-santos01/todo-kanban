export type Task = {
  id: string;
  title: string;
  type: "Baixa" | "Média" | "Alta";
  column: "A Fazer" | "Em Progresso" | "Feito";
  content: string;
};

export interface Tasks {
  "A Fazer": Task[];
  "Em Progresso": Task[];
  "Feito": Task[];
}
export interface TaskCardProps {
  task: Task;
  deleteTask: (id: string) => void;
}

export interface TaskToAdd {
  id: string;
  title: string;
  type: "Baixa" | "Média" | "Alta";
  column: keyof Tasks;
}

export interface AddTaskProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  addTask: (task: TaskToAdd) => void;
  updateTask: (task: Task) => void; // Altere esta linha
  column: keyof Tasks;
  editTask: Task | null;
}
