import React, {Component} from 'react';

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, dislikeCount: 0 };
    }

    incrementCount = () => {
        console.log('increment called')
        this.setState(
            {count: this.state.count + 1}
        );
    }

    decrementCount = () => {
        console.log('decrement func called')
        this.setState(
            {dislikeCount: this.state.dislikeCount - 1}
        )
    }

    render() {
        console.log('render called')
        return(
            <div className='main'>
                <div className='mainDiv'>
                    <ClassComponentNotes />
                    <hr/>
                    <h3>Smash that like button!</h3>
                    <button onClick={this.incrementCount}>
                        Likes: {this.state.count}
                    </button>
                    <h3>Hit dislike if you do not like the video</h3>
                    <button onClick={this.decrementCount}>
                        Dislike: {this.state.dislikeCount}
                    </button>
                </div>
            </div>
        )
    }
}

const ClassComponentNotes = () => {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
              <dt>ES6 JS Classes</dt>
              <dd>Built on these, must understand them</dd>
              <dt>must extend Component</dt>
              <dd>Class components need to extend the React component.</dd>
              <dt>render()</dt>
              <dd>Class components must always have a render method.</dd>
              <dt>export</dt>
              <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    )
}