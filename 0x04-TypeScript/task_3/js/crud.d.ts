import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function updateRow(rowID: RowID): void;
declare function deleteRow(rowID: RowID, row: RowElement): void;
