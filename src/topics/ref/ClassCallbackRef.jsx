import React from "react";

class ClassCallbackRef extends React.Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    componentDidMount() {
        this.myInput.current.focus(); // Using the callback ref to focus on the input element
    }

    render() {
        return <input ref={this.myInput} />;
    }
}

export default ClassCallbackRef;