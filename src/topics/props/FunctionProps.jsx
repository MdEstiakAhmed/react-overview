// Child component
const Child = (props) => {
    return <p>{props.message}</p>;
};

// Parent component
const Parent = () => {
    return <Child message="Hello from Parent!" />;
};

// Example usage
const App = () => {
    return (
        <div>
            <h2>Props Example</h2>
            <Parent />
        </div>
    );
};

export default App;
