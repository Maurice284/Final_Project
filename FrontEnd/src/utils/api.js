const BASE_URL = "https://www.cheapshark.com/api/1.0";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};
//fetch deals get request
//  `https://www.cheapshark.com/api/1.0/deals?title=${query}`
export const getDeals = (query) => {
  return fetch(`${BASE_URL}/deals?title=${query}`).then(handleServerResponse);
};

//deal look up api call
// `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`

export const getInitalGames = () => {
  return fetch(
    `${BASE_URL}/games?ids=1,2,3,4,5,6,7,8,9,10,11,12&format=array`
  ).then(handleServerResponse);
};

export const getDealDetails = () => {
  return fetch(`${BASE_URL}/deals?id=${dealID}`).then(handleServerResponse);
};
// this call will populate homepage games. feel free to write a randomize numbers function to mix things up
//get initial games request
//`https://www.cheapshark.com/api/1.0/games?ids=1,2,3,4,5,6,7,8,9,10,11,12&format=array`
const api = { getDeals, getInitalGames, getDealDetails };

export default api;
