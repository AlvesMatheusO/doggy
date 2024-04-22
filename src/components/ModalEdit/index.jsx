import React from 'react';
import Form from 'react-bootstrap/Form';
import "./index.css";

export default function ModalEdit({ editFood, toggleModal, brand, setBrand, kg, setKg, price, setPrice }) {
    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            toggleModal();
        }
    };

    return (
        <div className="modal-background" onClick={(e) => handleBackgroundClick(e)}>
            <div className="modal-edit-content">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" aria-label="Fechar" onClick={toggleModal}>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className="title">
                    <h3>Editar Ração</h3>
                </div>

                <form onSubmit={editFood}>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="kg">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control value={kg} onChange={(e) => setKg(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>

                    <div className="buttonList">
                        <button type="button" onClick={toggleModal}>Cancelar</button>
                        <button type="submit" className="button-default">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
