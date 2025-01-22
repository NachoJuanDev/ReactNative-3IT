export type TIndicatorConfig = {
  key: string;
  label: string;
  mode: string;
  unit: string;
};

const indicators = [
  {
    key: 'dolar',
    label: 'Dólar',
    mode: 'lastDays',
    unit: 'Pesos',
  },
  {
    key: 'euro',
    label: 'Euro',
    mode: 'lastDays',
    unit: 'Pesos',
  },
  {
    key: 'ipc',
    label: 'IPC',
    mode: 'thisYear',
    unit: 'Porcentaje',
  },
  {
    key: 'uf',
    label: 'UF',
    mode: 'lastDays',
    unit: 'Pesos',
  },
  {
    key: 'utm',
    label: 'UTM',
    mode: 'thisYear',
    unit: 'Pesos',
  },
];

export default indicators;
