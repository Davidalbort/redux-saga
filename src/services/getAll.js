import axios from 'axios';

export const getAll = async () => {
    const numRandom= Math.floor(Math.random(0.9)*826)+1;
    const baseUrl =`https://rickandmortyapi.com/api/character/${numRandom}`;
    // const baseUrl = `https://rickandmortyapi.com/api/character`;
    const res = await axios.get(baseUrl);
    console.log(res.data)
    return res.data //notes

}