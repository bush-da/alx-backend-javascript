/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and assign the returned RowID to newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with the age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its RowID
CRUD.deleteRow(newRowID);
