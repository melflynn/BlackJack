import axios from 'axios';

export const createGame = () => {
  return axios.post('/api/games/');
}