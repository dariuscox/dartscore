export interface GameState {
    [key: string]: Target;
}

export interface Target {
    [key: string]: number;
}

export interface FiveOneState {
    [key: string]: MoveTotal;
}
export interface MoveTotal {
    [key: string]: number | number[];
}
export function updateCricketState(
    segment: string,
    playerId: string,
    otherPlayer: string,
    gameState: GameState,
) {
    const newGameState = JSON.parse(JSON.stringify(gameState));
    newGameState[playerId][segment]++;
    if (
        newGameState[playerId][segment] > 3 &&
        newGameState[otherPlayer][segment] < 3
    ) {
        const score = segment === 'Bull' ? 25 : parseInt(segment);
        newGameState[playerId]['Total'] += score;
    }
    return newGameState;
}

export function updateFiveOneState(
    score: number,
    playerId: string,
    //otherPlayer: string,
    gameState: FiveOneState,
) {
    const newGameState = JSON.parse(JSON.stringify(gameState));
    var newTotal = newGameState[playerId]['Total'] - score;
    if (newTotal < 0) {
        // add functionality to handle busts and alert the user
        newTotal = 0;
    }
    newGameState[playerId]['Total'] = newTotal;
    newGameState[playerId]['Moves'].push(score);
    // if (
    //     newGameState[playerId][segment] > 3 &&
    //     newGameState[otherPlayer][segment] < 3
    // ) {
    //     const score = segment === 'Bull' ? 25 : parseInt(segment);
    //     newGameState[playerId]['Total'] += score;
    // }
    return newGameState;
}
