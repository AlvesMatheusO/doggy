import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./index.css";

export default function modalEdit({ editFood, toggleModal }) {
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
                    <div className='form-food'>
                        <div className='new-food'>
                            <Form onSubmit={editFood}>
                                <Form.Group className="mb-3" controlId="brand">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control name="brand"/>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="kg">
                                    <Form.Label>Peso</Form.Label>
                                    <Form.Control name="kg" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="price">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control name="price" />
                                </Form.Group>

                                <Button variant="outline-warning" type="submit">Enviar</Button>

                            </Form>
                        </div>
                    </div>
                </form>


                <div className="buttonList">
                    <button>Sair</button>

                    <button className="button-default" onClick={() => {
                        editFood()
                        toggleModal()
                    }}>Editar</button>

                </div>
            </div>
        </div>

    )
}