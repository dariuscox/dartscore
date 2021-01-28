import { useReducer, Reducer, Dispatch } from 'react';

export interface GameState {
    [key: string]: Target;
}

export interface Target {
    [key: string]: number;
}

export enum DartGameStateActionTypes {
    'updateTargetValueByPlayerId' = 'updateTargetValueByPlayerId',
    'updateGameState' = 'updateGameState',
}

export type DartGameStateActions =
    | {
          type: DartGameStateActionTypes.updateTargetValueByPlayerId;
          playerId: string;
          segment: string;
      }
    | { type: DartGameStateActionTypes.updateGameState; gameState: GameState };

export function useDartGameState(
    initialState: GameState,
): [GameState, Dispatch<DartGameStateActions>] {
    const gameStateReducer = (
        state: GameState,
        action: DartGameStateActions,
    ) => {
        switch (action.type) {
            case DartGameStateActionTypes.updateTargetValueByPlayerId:
                const currentPlayer = state[action.playerId];
                const modifiedPlayer = {
                    ...state[action.playerId],
                    [action.segment]: currentPlayer[action.segment]++,
                };
                return { ...state, [action.playerId]: modifiedPlayer };
            case DartGameStateActionTypes.updateGameState:
                return action.gameState;
            default:
                return state;
        }
    };
    return useReducer<Reducer<GameState, DartGameStateActions>>(
        gameStateReducer,
        initialState,
    );
}

export function handleUpdateTargetValueByPlayerId({
    dispatch,
    playerId,
    segment,
}: {
    dispatch: Dispatch<DartGameStateActions>;
    playerId: string;
    segment: string;
}) {
    return () => {
        dispatch({
            type: DartGameStateActionTypes.updateTargetValueByPlayerId,
            playerId,
            segment,
        });
    };
}

export function handleUpdateGameState(
    dispatch: Dispatch<DartGameStateActions>,
) {
    return (gameState: GameState) => {
        dispatch({
            type: DartGameStateActionTypes.updateGameState,
            gameState,
        });
    };
}
