export interface TodoInfo {
  id: string;
  name: string;
  isDone: boolean;
}

export interface TodoDetails {
  id: string;
  name: string;
  isDone: boolean;
  description: string;
}

export function toInfo(details: TodoDetails): TodoInfo {
  return {
    id: details.id,
    name: details.name,
    isDone: details.isDone
  }
}
