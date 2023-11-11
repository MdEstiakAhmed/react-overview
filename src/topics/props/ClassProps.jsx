import React, { Component } from 'react';

class Child extends Component {
    render() {
        return <p>{this.props.message}</p>;
    }
}

class Parent extends Component {
    render() {
        return <Child message="Hello from Parent!" />;
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <h2>Props Example</h2>
                <Parent />
            </div>
        );
    }
}

export default App;
