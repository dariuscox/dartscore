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
    const invalidScores = [163, 166, 169, 172, 173, 175, 176, 178, 179];
    const invalidCheckout = [159, 162, 163, 165, 166, 168, 169];
    if (invalidScores.includes(score) || score > 180 || score < 0) {
        return newGameState;
    }
    var newTotal = newGameState[playerId]['Total'] - score;
    if (newTotal === 0 && invalidCheckout.includes(score)) {
        // this means its an invalid checkout
        return newGameState;
    }
    if (newTotal < 0) {
        // add functionality to handle busts and alert the user
        return newGameState;
    }
    newGameState[playerId]['Total'] = newTotal;
    newGameState[playerId]['Moves'].push(score);

    return newGameState;
}

export function checkWinStateCricket(
    gameState: GameState,
    player1: string,
    player2: string,
) {
    console.log('In check winstate');
    var p1Checked = true;
    for (const [key, value] of Object.entries(gameState[player1])) {
        console.log(key);
        console.log(value);
        if (key !== 'Total' && gameState[player1][key] < 3) {
            p1Checked = false;
            console.log('set p1 false');
            break;
        }
    }
    var p2Checked = true;
    for (const [segment, value] of Object.entries(gameState[player2])) {
        if (segment !== 'Total' && value < 3) {
            console.log(segment);
            console.log(value);
            p2Checked = false;
            console.log('set p2 false');
            break;
        }
    }
    console.log(gameState[player1]['Total'] > gameState[player2]['Total']);
    if (
        p1Checked &&
        gameState[player1]['Total'] > gameState[player2]['Total']
    ) {
        console.log('returning player 1');
        return player1;
    }
    if (
        p2Checked &&
        gameState[player2]['Total'] > gameState[player1]['Total']
    ) {
        return player2;
    }
    return '';
}

export function checkWinStateFive(
    gameState: FiveOneState,
    player1: string,
    player2: string,
) {
    console.log('In check winstate');
    if (gameState[player1]['Total'] === 0) {
        return player1;
    }

    if (gameState[player2]['Total'] === 0) {
        return player2;
    }

    return '';
}
