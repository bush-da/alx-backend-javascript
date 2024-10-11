// interface.ts

// Define RowID as a type alias for number
export type RowID = number;

// Define an interface for RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}
