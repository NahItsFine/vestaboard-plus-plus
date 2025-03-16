import axios, { AxiosRequestConfig } from 'axios';
import { READ_WRITE_ENDPOINT, READ_WRITE_HEADER, READ_WRITE_KEY } from './config';

// Models
export interface VestaboardGetResponse {
  currentMessage: {
    layout: string;
    id: string;
  }
}
export interface VestaboardPostResponse {
  status: string,
  id: string,
  created: number,
}

// Generic HTTP request
export const HTTP_METHOD = Object.freeze({
  GET: 'GET',
  POST: 'POST',
});
export type HTTP_METHOD_TYPE = keyof typeof HTTP_METHOD;

export const performHttpRequest = async (
  method: HTTP_METHOD_TYPE,
  endpoint: string,
  headers: Record<string, string> = {},
  data: unknown = null
) => {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    headers,
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('HTTP request failed:', error);
    throw error;
  }
};

// GET message via local be
// POST message via local be

// GET message via Vestaboard cloud be
export const readWriteGet = async () => {
  const response = await fetch(READ_WRITE_ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      [READ_WRITE_HEADER]: READ_WRITE_KEY,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error('Vestaboard Cloud Read/Write API (GET) failed');
  }

  const responseObject = await response.json() as VestaboardGetResponse;
  return JSON.parse(responseObject.currentMessage.layout) || [];
}

// POST message via Vestaboard cloud be
export const readWritePost = async (codeArray: number[][]) => {
  const response = await fetch(READ_WRITE_ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      [READ_WRITE_HEADER]: READ_WRITE_KEY,
    },
    method: "POST",
    body: JSON.stringify(codeArray),
  });

  if (!response.ok) {
    throw new Error('Vestaboard Cloud Read/Write API (POST) failed');
  }

  const responseObject = await response.json() as VestaboardPostResponse;
  return responseObject.status === 'ok';
}