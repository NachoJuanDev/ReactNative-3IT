import axios from 'axios';

import env from '@/env';

const baseUrl = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

export async function get<T>(
  path: string,
): Promise<{data?: T; error?: string | undefined; code: number}> {
  const url = `${baseUrl}/${path}`;
  let response: any = {};
  try {
    response = await axios.get(url, {
      params: {
        apikey: env.apiKey,
        formato: 'json',
      },
    });
  } catch (error: any) {
    response = error.response;
  }

  if (response.status === 204) {
    return {code: response.status};
  }

  if (response.status === 200) {
    return {data: response.data, code: response.status};
  }

  if (response.status === 401 || response.status === 403) {
    return {
      error: 'unauthorized',
      code: response.status,
    };
  }

  if (response.status === 404) {
    return {
      error: 'No hay datos para mostrar',
      code: response.status,
    };
  }

  return {
    error: 'Ha ocurrido un error. Vuelvo a intentar más tarde.',
    code: response.status,
  };
}
