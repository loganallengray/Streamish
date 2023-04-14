const baseUrl = '/api/video/';

export const getAllVideos = () => {
    return fetch(baseUrl + "GetWithComments")
        .then((res) => res.json())
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/GetWithComments/${id}`).then((res) => res.json());
};

export const searchVideos = (criterion) => {
    return fetch(baseUrl + `Search?q=${criterion}&sortDesc=true`)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    // post fetch, sends video object to the videoController in backend
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};