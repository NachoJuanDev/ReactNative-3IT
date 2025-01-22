import {get} from '@/lib/axios';
import {TRecordResponse} from '@/lib/types';

export async function fetchValues({key, mode}: {key: string; mode: string}) {
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

  const result = await get<TRecordResponse>(path);

  return result;
}

export async function fetchDetails({key, mode}: {key: string; mode: string}) {
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

  const result = await get<TRecordResponse>(path);

  return result;
}
