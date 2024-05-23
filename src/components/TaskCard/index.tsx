import { FC } from "react";
import { Task } from "../../types/task";
import {
  Card,
  Title,
  Priority,
  ArrowButton,
  DeleteButton,
  ButtonContainer,
  BottomContainer,
  EditButton,
  ButtonGroup, // Importe o novo componente
} from "./TaskCard.styles";

interface TaskCardProps {
  task: Task;
  moveTask: (id: string, direction: "left" | "right") => void;
  openEditModal: (task: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskCard: FC<TaskCardProps> = ({
  task,
  moveTask,
  openEditModal,
  deleteTask,
}) => {
  const priorityColors: { [key in Task["type"]]: string } = {
    Baixa: "green",
    Média: "orange",
    Alta: "red",
  };

  return (
    <div>
      <Card>
        <Title>{task.title}</Title>
        <ButtonContainer>
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
        </ButtonContainer>
        <BottomContainer>
          <Priority
            style={{ color: priorityColors[task.type], fontWeight: "bold" }}
          >
            Prioridade: {task.type}
          </Priority>
          <ButtonGroup>
            {" "}
            {/* Adicione o novo componente aqui */}
            <EditButton onClick={() => openEditModal(task)}>Editar</EditButton>
            <DeleteButton
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                if (
                  window.confirm(
                    "Tem certeza de que deseja excluir esta tarefa?"
                  )
                ) {
                  deleteTask(task.id);
                }
              }}
            >
              Excluir
            </DeleteButton>
          </ButtonGroup>
        </BottomContainer>
      </Card>
    </div>
  );
};

export default TaskCard;
