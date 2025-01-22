import {get} from '@/lib/axios';

export type TDetail = {
  Valor: string;
  Fecha: string;
};

export type TValuesResponse = {
  [key: string]: TDetail[];
};

export async function fetchDetails(key: string, mode: string) {
  let path = `${key}/posteriores`;
  const date = new Date();
  if (mode === 'lastDays') {
    date.setDate(date.getDate() - 10);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    path = `${path}/${year}/${month}/dias/${day}`;
  } else {
    date.setMonth(date.getMonth() - 10);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    path = `${path}/${year}/${month}`;
  }

  const result = await get<TValuesResponse>(path);

  return result;
}
