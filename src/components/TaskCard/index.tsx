import { FC } from "react";
import { Task } from "../../types/task";
import { Card, Title, Priority } from "./TaskCard.styles";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div>
      <Card>
        <Title>{task.title}</Title>
        <Priority>Prioridade: {task.type}</Priority>
      </Card>
    </div>
  );
};

export default TaskCard;
