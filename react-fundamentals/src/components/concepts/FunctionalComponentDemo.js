/* 
2.1 FUNCTIONAL COMPONENTS OVERVIEW
Hopefully, you noticed that we have separate files for Header, Footer, Sidebar, and Resources. These are all known as components in React. Components are individual pieces of the User Interface that can be altered independently of one another.

There are two types of components: "Functional Components" and "Class Components". In this project, we'll start by talking about and working with "Functional Components". 

Functional Components
Functional components have the following capabilities/traits:

Rendering of information with or without changing state.
No  keyword. Class components will use  extensively.
Often used as child components that will receive 'props' (aka properties) from a parent component.
Functional components are just plain, standard JavaScript functions that return a React element. 

Rule: Component names must be capitalized, and they generally are Pascal cased. This means that all separate words have capital letters.

*/
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


const FunctionalComponentDemo = () => {
    return ( //there must be a single parent in the return. or an error will be thrown
        // <div className='main'>
        //     <div className='mainDiv'>
        //         Hello React
        //     </div>
        // </div>
        <div className='main'>
            <div className='mainDiv'>
                <div>
                    <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                </div>
                <div>
                    <h3> Cant use state </h3>
                    <p> With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</p>
                </div>
                <div>
                    <h3> No 'this' keyword </h3>
                    <p> Older class components use 'this', functional components have no 'this' object.</p>
                </div>
                <div>
                    <h3> Cant use effects </h3>
                    <p> With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</p>
                </div>
                <div>
                    <h3> return() </h3>
                    <p> Must return a single elment, but this element may have nested elements inside.</p>
                </div>

                <div>
                    <h1> Functional Syntax versus Arrow Function</h1>
                    <hr></hr>
                </div>
                <Row>
                    <Col xs='6'>
                        <HelloWorld />
                    </Col>
                    <Col xs='6'>
                        <HelloWorldFatArrow />
                    </Col>
                </Row>
            </div>
        </div>
);}

const HelloWorld = () => {
    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle tag="h5">Regular Function</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">See below. Good old fashioned function.</CardSubtitle>
                <CardText>const HellowWorld = function()</CardText>
            </CardBody>
        </Card>
    </div>

    )
}


const HelloWorldFatArrow = () => {
    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle tag="h5">Fat Arrow Function</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">New Arrow Function</CardSubtitle>
                <CardText> Const HelloWorld = () => </CardText>
            </CardBody>
        </Card>
    </div>
    )
}
                

export default FunctionalComponentDemo;