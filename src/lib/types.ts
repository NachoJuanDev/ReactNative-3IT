export type TRecord = {
  Valor: string;
  Fecha: string;
};

export type TRecordResponse = {
  [key: string]: TRecord[];
};
