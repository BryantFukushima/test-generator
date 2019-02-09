import React from "react";

const input = props => {
    let inputElem = null;
    switch (props.elemType) {
        case "input":
            inputElem = (
                <input
                    {...props.config}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        default:
            inputElem = (
                <input
                    {...props.config}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }
    return <div>{inputElem}</div>;
};

export default input;
