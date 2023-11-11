const Number = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>+1</button>
        </div>I
    )
}

ReactDOM.render(<Number />, document.getElementById('root'));