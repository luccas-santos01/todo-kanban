import { FC } from "react";
import { Task, TaskCardProps } from "../../types/task";
import Swal from "sweetalert2";
import {
  Card,
  Title,
  Priority,
  ArrowButton,
  DeleteButton,
  ButtonContainer,
  BottomContainer,
  EditButton,
  ButtonGroup,
} from "./TaskCard.styles";

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
            <EditButton onClick={() => openEditModal(task)}>Editar</EditButton>
            <DeleteButton
              onClick={async (event: React.MouseEvent) => {
                event.stopPropagation();
                const result = await Swal.fire({
                  title: "Tem certeza de que deseja excluir esta tarefa?",
                  showCancelButton: true,
                  confirmButtonText: "Sim",
                  denyButtonText: "Cancelar",
                });

                if (result.isConfirmed) {
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
