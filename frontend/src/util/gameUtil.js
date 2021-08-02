import axios from 'axios';

export const createGame = () => {
  return axios.post('/api/games/');
}

export const drawCard = () => {
  return axios.patch('/api/games/draw');
}

export const addPlayer = (userId) => {
  return axios.patch('/api/games/newPlayer', userId);
}

export const switchTurn = () => {
  return axios.patch('/api/games/turn');
}