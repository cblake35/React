import { useState } from "react";
import PropTypes from 'prop-types';
import FunctionalComponent from "./PropsDemoChild";

const PropsDemo = () => {

    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('yellow') : setBackgroundColor('purple');
    }
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent string='will this display' function={toggleColor} selectedStyle={color} />
                    <FunctionalComponent string='This is the second string' function={toggleBackgroundColor} selectedStyle={backgroundColor}/>
                    <FunctionalComponent string='This is the third string' function={toggleBorderRadius} selectedStyle={borderRadius}/>
                    <FunctionalComponent string='This is the fourth string' function={toggleBorderStyle} selectedStyle={borderStyle}/>
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;


/* PropTypes 
-they let you control exactly the type of prop passed between components.
-can also provide default values for props if values are failed to be passed to the component.  */

FunctionalComponent.defaultProps = {
    string: 'This is wild',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style?'
}

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}
