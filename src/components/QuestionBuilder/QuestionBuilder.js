import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import { updateObject } from '../../shared/utilities';
import Input from '../../components/UI/Input/Input';

class QuestionBuilder extends Component {
    state = {
        questionForm: {
            question: {
                elemType: "input",
                config: {
                    type: "text",
                    placeholder: "Question"
                },
                value: ""
            },
            opt1: {
                elemType: "input",
                config: {
                    type: "text",
                    placeholder: "Answer"
                },
                value: ""
            }
        }
    };

    questionAddHandler = event => {
        event.preventDefault();
        const formData = {};
        for (let formElemId in this.state.questionForm) {
            formData[formElemId] = this.state.questionForm[
                formElemId
            ].value;
        }

        this.props.onAddQuestion(formData);
    };

    inputChangedHandler = (event, formElemId) => {
        const updateFormElem = updateObject(this.state.questionForm[formElemId], {
            value: event.target.value
        })
        const updatedQuestionForm = updateObject(this.state.questionForm, {
            [formElemId]: updateFormElem
        });

        this.setState({
            questionForm: updatedQuestionForm
        });
    };

    render() {

        const formElemArray = [];
        for (let key in this.state.questionForm) {
            formElemArray.push({
                id: key,
                config: this.state.questionForm[key]
            });
        }
        let form = (
            <form onSubmit={this.questionAddHandler}>
                {formElemArray.map(formElem => (
                    <Input 
                        key={formElem.id}
                        elemType={formElem.config.elemType}
                        config={formElem.config.config}
                        value={formElem.config.value}
                        changed={event => this.inputChangedHandler(event, formElem.id)}
                    />
                ))}
                <button>Add</button>
            </form>
        )

        return (
            <div>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const maoDispatchToProps = dispatch => {
    return {
        onAddQuestion: question => dispatch(actions.addQuestion(question))
    };
};

export default connect(
    mapStateToProps,
    maoDispatchToProps
)(QuestionBuilder);
