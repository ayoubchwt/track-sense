export interface CreateSession {
  sessionName: string;
  rounds: number;
  genres: string;
  isPublic: boolean;
  sessionCode: string;
}
export interface JoinSession {
  id?: string;
  sessionCode?: string;
  isPublic: boolean;
}
export interface publicSession {
  id?: string;
  sessionName: string;
  genres: string;
  rounds: number;
  ownerName: string;
}
