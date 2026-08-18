export interface CreateSession {
  sessionName: string;
  rounds: number;
  genres: string;
  sessionCode: string;
}
export interface JoinSession {
  sessionCode: string;
}
