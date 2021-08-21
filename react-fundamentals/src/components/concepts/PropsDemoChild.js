import React from 'react';

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            {/* <p>The current selected style is : {props.selectedStyle}</p> */}
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}

export default FunctionalComponent;