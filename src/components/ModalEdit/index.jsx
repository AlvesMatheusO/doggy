import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./index.css";

export default function modalEdit({ editFood, 
    toggleModal,
     brand, setBrand, 
     kg, setKg, 
     price, setPrice }) {

    const handleBackgroundClick = (event) => {
        // Verifica se o alvo do evento é a div de fundo modal-background
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

                <form>


                    <Form onSubmit={editFood}>
                        <Form.Group className="mb-3" name="brand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control  value={brand} name="brand" onChange={(e) => setBrand(e.target.value)} />

                        </Form.Group>

                        <Form.Group className="mb-3" name="kg">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control value={kg} name="kg" onChange={(e) => setKg(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" name="price">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                    </Form>

                </form>


                <div className="buttonList">
                    <button onClick={() => {
                        toggleModal()
                    }}>Sair</button>

                    <button className="button-default" onClick={() => {
                        editFood()
                        toggleModal()
                    }}>Editar</button>

                </div>
            </div>
        </div>

    )
}