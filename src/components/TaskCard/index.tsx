// TaskCard.tsx
import { FC } from "react";
import { Task } from "../../types/task";
import {
  Card,
  Title,
  Priority,
  ArrowButton,
  DeleteButton,
} from "./TaskCard.styles";

interface TaskCardProps {
  task: Task;
  moveTask: (id: string, direction: "left" | "right") => void;
  openEditModal: (task: Task) => void;
  deleteTask: (id: string) => void; // Adicione esta linha
}

const TaskCard: FC<TaskCardProps> = ({
  task,
  moveTask,
  openEditModal,
  deleteTask,
}) => {
  // Adicione deleteTask aqui
  const priorityColors: { [key in Task["type"]]: string } = {
    Baixa: "green",
    Média: "yellow",
    Alta: "red",
  };

  return (
    <div onClick={() => openEditModal(task)}>
      <Card>
        <Title>{task.title}</Title>
        <Priority
          style={{ color: priorityColors[task.type], fontWeight: "bold" }}
        >
          Prioridade: {task.type}
        </Priority>
        {task.column !== "A Fazer" && (
          <ArrowButton
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              moveTask(task.id, "left");
            }}
          >
            ←
          </ArrowButton>
        )}
        {task.column !== "Feito" && (
          <ArrowButton
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              moveTask(task.id, "right");
            }}
          >
            →
          </ArrowButton>
        )}
        <DeleteButton
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            if (
              window.confirm("Tem certeza de que deseja excluir esta tarefa?")
            ) {
              deleteTask(task.id);
            }
          }}
        >
          Excluir
        </DeleteButton>
      </Card>
    </div>
  );
};

export default TaskCard;
