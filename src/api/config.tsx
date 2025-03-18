import { _READ_WRITE_KEY, _SPOTIFY_APP_REFRESH_TOKEN, _SPOTIFY_APP_CLIENT_SECRET } from "./keys";

// This application
export const ENDPOINT = 'https://192.168.2.19:5173/';

// Vestaboard Cloud
export const READ_WRITE_ENDPOINT = 'https://rw.vestaboard.com/';
export const READ_WRITE_HEADER = 'X-Vestaboard-Read-Write-Key';
export const READ_WRITE_KEY = _READ_WRITE_KEY;

// Vestaboard Local
// TBD

// Third party
export const WORLD_TIME_ENDPOINT = 'http://worldtimeapi.org/api/timezone/America/Toronto';

export const SPOTIFY_ACCESS_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
export const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const SPOTIFY_APP_CLIENT_ID = 'a693a12852cc42619982ef465f4b11ae';
export const SPOTIFY_APP_CLIENT_SECRET = _SPOTIFY_APP_CLIENT_SECRET;
export const SPOTIFY_CURRENTLY_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
export const SPOTIFY_APP_REFRESH_TOKEN = _SPOTIFY_APP_REFRESH_TOKEN;