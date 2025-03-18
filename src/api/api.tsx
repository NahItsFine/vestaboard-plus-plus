import axios, { AxiosRequestConfig } from 'axios';
import { READ_WRITE_ENDPOINT, READ_WRITE_HEADER, READ_WRITE_KEY, SPOTIFY_ACCESS_TOKEN_ENDPOINT, SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET, SPOTIFY_APP_REFRESH_TOKEN, SPOTIFY_CURRENTLY_PLAYING_ENDPOINT } from './config';
import base64js from 'base64-js';

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

// Vestaboard
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

// Spotify
export type SpotifyNowPlayingRaw = {
  is_playing: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item?: any,
}
export type SpotifyNowPlaying = {
  isPlaying: boolean,
  artist?: string,
  album?: string,
  song?: string,
}

const getAccessToken = async () => {
  const basic = base64js.fromByteArray(new TextEncoder().encode(`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`));
  const response = await fetch(SPOTIFY_ACCESS_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_APP_REFRESH_TOKEN,
    }).toString(),
  });

  return response.json();
};

export const getNowPlaying = async (): Promise<SpotifyNowPlayingRaw> => {
  const { access_token } = await getAccessToken();
  const result = fetch(SPOTIFY_CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  
  return (await result).json();
}
