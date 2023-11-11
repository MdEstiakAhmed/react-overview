const myElement = React.createElement('div', null, 'Hello World');

const multipleElements = React.createElement(
    'div', 
    null, 
    React.createElement(
        'h1', 
        null, 
        'Hello World'
    ), 
    React.createElement(
        'h2', 
        null, 
        'React is awesome'
    )
);

ReactDOM.render(multipleElements, document.getElementById('root'));