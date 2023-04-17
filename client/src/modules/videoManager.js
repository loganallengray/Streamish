import { getToken } from "./authManager";

const baseUrl = '/api/video/';

export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetWithComments`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => res.json())
    })
};

export const getVideo = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetWithComments/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => res.json());
    })
};

export const searchVideos = (criterion) => {
    return getToken().then((token) => {
        return fetch(baseUrl + `Search?q=${criterion}&sortDesc=true`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => res.json())
    })
};

export const addVideo = (video) => {
    // post fetch, sends video object to the videoController in backend
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(video),
        });
    })
};