import { API_KEY } from "../config";

export const getGifs = async (searchCategory) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${searchCategory}&limit=15`;
    const res = await fetch(url, { method: 'GET' });
    const { data } = await res.json();
    return data;
}