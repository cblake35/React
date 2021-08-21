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