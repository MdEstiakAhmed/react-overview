import React from "react";

class ClassStringRef extends React.Component {
    componentDidMount() {
        this.myInput.focus(); 
    }

    render() {
        return <input ref={(input) => (this.myInput = input)} />;
    }
}


export default ClassStringRef;