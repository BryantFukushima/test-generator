import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utilities";

const initialState = {
    questions: []
};

const addQuestion = (state, action) => {
    let newQues = action.question;
    return updateObject(state, {
        questions: state.questions.concat(newQues)
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            return addQuestion(state, action);
        default:
            return state;
    }
};

export default reducer;
