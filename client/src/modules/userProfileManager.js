import { getToken } from "./authManager";

const baseUrl = '/api/UserProfile/';

export const getUserWithVideos = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}GetWithVideos/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    })
};