import { envConstants } from '../constants/index';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: envConstants.SUCCESS, message };
}

function error(message) {
    return { type: envConstants.ERROR, message };
}

function clear() {
    console.log("========================================>cleared");
    return { type: envConstants.CLEAR };
}