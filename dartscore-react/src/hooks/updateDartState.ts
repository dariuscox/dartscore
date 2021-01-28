export interface GameState {
    [key: string]: Target;
}

export interface Target {
    [key: string]: number;
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
