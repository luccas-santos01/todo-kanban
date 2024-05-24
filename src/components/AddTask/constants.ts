export const TASK_STATUS = {
  TODO: "A Fazer",
  IN_PROGRESS: "Em Progresso",
  DONE: "Feito",
};

export const TASK_PRIORITY = {
  LOW: "Baixa",
  MEDIUM: "Média",
  HIGH: "Alta",
} as const;

export type TaskPriority = typeof TASK_PRIORITY[keyof typeof TASK_PRIORITY];
