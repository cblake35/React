import React, { Component } from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props)
        this.state = { fruitArray: ['Coconut', 'orange', 'guava'], newFruit: '' }
        this.addNewFruit = this.addNewFruit.bind(this);
    }

    addNewFruit = (e) => {
        e.preventDefault();

        this.setState(
            {
                fruitArray: [...this.state.fruitArray, this.state.newFruit],
                newFruit: ''
            }
        )
        console.log(this.state.fruitArray)
    }
    /* REACT LIFECYCLES */
    
    componentDidMount = () => { //invoked immediately after components have been rendered, only runs once after invocation
        console.log('Components have mounted')
    }

    componentDidUpdate = () => { //invoked immediately after an update occurs whether it is a change of state or props
        console.log('Components have been updated')
    }

    // shouldComponentUpdate = () => { //returning false will prevent componentDidUpdate to trigger a re-render i.e it wont be called
    //     return false
    // }

    componentWillUnmount = () => { //is called right before a component is unmounted and destroyed, called once. Any necessary cleanup will be performed in this method.
        console.log('Components have been unmounted')
    }

    
    render() {
        console.log(this.state.fruitArray)
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h3>New Fruit</h3>
                    <form onSubmit={this.addNewFruit}>
                        <input type='text' id='fruitInput' value={this.state.newFruit} onChange={(e) => this.setState({ newFruit: e.target.value })}></input>
                        <button type='submit'>Add Fruit</button>
                    </form>
                    <FruitBowl fruitArray={this.state.fruitArray} />
                </div>
            </div>
        )
    }
}

class FruitBowl extends Component {
    render() {
        return (
            <div className='fruitBox'>
                {this.props.fruitArray.map((fruit, index) => {
                    return (
                        <Fruit passingFruit={fruit}/>
                    )
                })}
            </div>
        )
    }
}

const Fruit = (props) => {
    return (
        <div>
            <h3>{props.passingFruit}</h3>
        </div>
    )
}