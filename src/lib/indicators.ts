export type TIndicatorConfig = {
  key: string;
  label: string;
  type: string;
  unit: string;
};

const indicators = [
  {
    key: 'dolar',
    label: 'Dólar',
    type: 'day',
    unit: 'Pesos',
  },
  {
    key: 'euro',
    label: 'Euro',
    type: 'day',
    unit: 'Pesos',
  },
  {
    key: 'ipc',
    label: 'IPC',
    type: 'year',
    unit: 'Porcentaje',
  },
  {
    key: 'uf',
    label: 'UF',
    type: 'day',
    unit: 'Pesos',
  },
  {
    key: 'utm',
    label: 'UTM',
    type: 'year',
    unit: 'Pesos',
  },
];

export default indicators;
