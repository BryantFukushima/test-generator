import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionBuilder from "../../components/QuestionBuilder/QuestionBuilder";
import styles from "./TestGen.module.scss";

class TestGen extends Component {
    render() {
        let questions = this.props.questions.map((question, index) => (
            <div key={index}>
                <h2>{question.question}</h2>
                <p>{question.opt1}</p>
                <p>{question.opt2}</p>
                <p>{question.opt3}</p>
                <p>{question.opt4}</p>
            </div>
        ));

        return (
            <div className={styles.header}>
                <h1> Welcome to Test Gen </h1>
                <p> A simple test generator. </p>
                <QuestionBuilder />
                {questions}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

export default connect(mapStateToProps)(TestGen);
