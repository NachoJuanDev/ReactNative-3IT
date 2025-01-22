import {get} from '@/lib/axios';

export type TValue = {
  Valor: string;
  Fecha: string;
};

export type TValuesResponse = {
  [key: string]: TValue[];
};

export async function fetchValues(key: string, mode: string) {
  let path = '';
  const date = new Date();
  if (mode === 'lastDays') {
    date.setDate(date.getDate() - 30);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    path = `${key}/posteriores/${year}/${month}/dias/${day}`;
  } else {
    const year = date.getFullYear();
    path = `${key}/${year}`;
  }

  const result = await get<TValuesResponse>(path);

  return result;
}
