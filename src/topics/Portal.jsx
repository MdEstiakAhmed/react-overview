import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root') 
    );
};

// App component
const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <h2>React Portal Example</h2>
            <button onClick={toggleModal}>Open Modal</button>

            <Modal isOpen={modalOpen} onClose={toggleModal}>
                <p>This content is rendered using a React Portal!</p>
            </Modal>
        </div>
    );
};

export default App;
