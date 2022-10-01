import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';

export const JSONPlaceholderAPI = {
    getAlbums: async () => {
        let response = await axios.get(`${BASE}/albums`);
        return response.data;
    },

    getNameAlbum: async (id: number) => {
        let response = await axios.get(`${BASE}/albums/${id}`);
        return response.data.title;
    },
    
    getPhotos: async (id: number) => {
        let response = await axios.get(`${BASE}/albums/${id}/photos`);
        return response.data;
    },
    
    getPhoto: async (id: number) => {
        let response = await axios.get(`${BASE}/photos/${id}`);
        return response.data;
    }


}