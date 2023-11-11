import React, { PureComponent, Component } from 'react';

class PureExample1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: 0,
        }));
    };

    render() {
        console.log('Render called from PureExample1');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        );
    }
}

class PureExample2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleSame = () => {
        this.setState((prevState) => ({
            count: 0,
        }));
    };

    handleUpdate = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        console.log('Render called from PureExample2');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleSame}>Increment Same</button>
                <button onClick={this.handleUpdate}>Increment by 1</button>
            </div>
        );
    }
}

class PureExample4 extends PureExample2 {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleSame = () => {
        this.setState((prevState) => ({
            count: 0,
        }));
    };

    handleUpdate = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        console.log('Render called from PureExample2');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleSame}>Increment Same</button>
                <button onClick={this.handleUpdate}>Increment by 1</button>
            </div>
        );
    }
}

const PureExample3 = () => {
    const [count, setCount] = React.useState(0);
    const handleSame = () => {
        setCount(0);
    };

    const handleUpdate = () => {
        setCount(prev => prev + 1);
    }

    console.log('Render called from PureExample3');

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleSame}>Increment same</button>
            <button onClick={handleUpdate}>Increment by 1</button>
        </div>
    );
}

export {
    PureExample1,
    PureExample2,
    PureExample3,
    PureExample4
}


