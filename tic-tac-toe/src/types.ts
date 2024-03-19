export type Square = {
  row: number;
  column: number;
};

export type Players = {
  X: string;
  O: string;
};

export type SquareValue = 'X' | 'O' | null;
export interface SquarePosition {
  row: number;
  column: number;
}
