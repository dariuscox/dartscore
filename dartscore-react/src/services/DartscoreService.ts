import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';

const baseurl = 'https://iukxdiz252.execute-api.us-east-1.amazonaws.com/dev';

// interface ResponseJson {
//     game_id: string;
// }

const DartscoreService = {
    generateGameId: () => {
        let url = `${baseurl}/generateid`;

        return axios
            .get(url)
            .then((res: AxiosResponse) => {
                return res.data;
            })
            .catch((err: AxiosError) => {
                return Promise.reject(JSON.stringify(err));
            });
    },
    lobbyState: () => {
        let url = `${baseurl}/lobby`;

        return axios
            .get(url)
            .then((res: AxiosResponse) => {
                return res.data;
            })
            .catch((err: AxiosError) => {
                return Promise.reject(JSON.stringify(err));
            });
    },
};

export default DartscoreService; //export methods directly
