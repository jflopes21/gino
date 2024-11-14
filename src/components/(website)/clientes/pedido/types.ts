export const Status = {
  1: "Pendente",
  2: "Concluído",
  3: "Cancelado"
};

export type StatusKey = keyof typeof Status;

export function getStatus(id: StatusKey): string {
  return Status[id] || "Status desconhecido";
}

export const ProgressStatus = {
  1: "Aguardando confirmação",
  2: "Confirmado",
  3: "Em preparo",
  4: "Entregue"
};

export type ProgressStatusKey = keyof typeof ProgressStatus;

export function getProgressStatus(id: ProgressStatusKey): string {
  return ProgressStatus[id] || "Status desconhecido";
}
