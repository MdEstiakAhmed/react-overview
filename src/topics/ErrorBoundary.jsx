import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error('Error Boundary caught an error:', error, errorInfo);
        // Update state to trigger rendering of the error UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // Render a fallback UI after an error occurs
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        // Render the children components normally
        return this.props.children;
    }
}

// Example usage of the error boundary
class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                {/* This component might throw an error during rendering */}
                <BrokenComponent />
            </ErrorBoundary>
        );
    }
}

// A component that might throw an error
class BrokenComponent extends Component {
    render() {
        // Simulating an error by accessing an undefined variable
        return <p>{nonExistentVariable}</p>;
    }
}

export default App;
