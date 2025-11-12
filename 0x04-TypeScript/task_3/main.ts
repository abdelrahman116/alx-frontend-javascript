/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud";

class RowClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRowID: RowElement = { ...row, age: 23 };

CRUD.deleteRow(newRowID, updateRowID);
CRUD.updateRow(newRowID);
