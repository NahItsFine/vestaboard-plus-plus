import axios, { AxiosRequestConfig } from 'axios';

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
// POST message via Vestaboard cloud be
