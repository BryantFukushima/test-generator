import * as actionTypes from './actionTypes';

export const addQuestion = question => {
    return {
        type: actionTypes.ADD_QUESTION,
        question
    }
}