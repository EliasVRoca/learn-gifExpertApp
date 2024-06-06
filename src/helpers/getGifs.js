export const getGifs = async (searchCategory) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xVz52iFqrKDFeXVEqEE9IOXCYUq3VZGv&q=${searchCategory}&limit=15`;
    const res = await fetch(url, { method: 'GET' });
    const { data } = await res.json();
    console.log(data);
    return data;
}