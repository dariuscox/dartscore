import axios, { AxiosResponse, AxiosError } from 'axios';
import { GameState, FiveOneState } from 'hooks/useDartsGameState';

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

export const InitializeGame = (
    gameID: string,
    players: string[],
    game_type: string,
) => {
    let url = `${baseurl}/initialize`;

    return axios
        .post(url, { game_id: gameID, players: players, game_type: game_type })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};

export const CreateGame = (game_id: string, game_type: string) => {
    let url = `${baseurl}/create`;

    return axios
        .post(url, { game_id: game_id, game_type: game_type })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};

export const UpdateGame = (
    gameID: string,
    gameState: GameState | FiveOneState,
) => {
    let url = `${baseurl}/update`;

    return axios
        .post(url, { game_id: gameID, game_state: gameState })
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

export const GetGameState = (gameID: string) => {
    let url = `${baseurl}/gamestate?game=${gameID}`;

    return axios
        .get(url)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return Promise.reject(JSON.stringify(err));
        });
};
