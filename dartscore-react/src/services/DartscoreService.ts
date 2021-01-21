import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';

const baseurl = 'https://iukxdiz252.execute-api.us-east-1.amazonaws.com/dev';

export const GenerateGameId = () => {
    let url = `${baseurl}/generateid`;

    return axios
        .get(url)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};

export const CreateGame = (game_id: string) => {
    let url = `${baseurl}/create`;

    return axios
        .post(url, { game_id: game_id })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};

export const LobbyState = (gameID: string) => {
    let url = `${baseurl}/lobby?game=${gameID}`;

    return axios
        .get(url)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};
