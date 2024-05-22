interface Task {
  title: string;
  content: string;
  type: string;
}

interface Tasks {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}
interface TaskCardProps {
  task: Task;
}
