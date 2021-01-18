import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';

const baseurl = 'https://vq4564tgfc.execute-api.us-east-1.amazonaws.com/dev2';

interface ResponseJson {
    game_id: string;
}

const DartscoreService = {
    generateGameId: () => {
        let url = `${baseurl}/generateid`;

        return axios
            .get(url)
            .then((res) => {
                return Promise.resolve(res.data);
            })
            .catch((err: AxiosError) => {
                return Promise.reject(JSON.stringify(err));
            });
    },
};

export default DartscoreService;
