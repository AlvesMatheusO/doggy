import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./index.css";

export default function ModalEdit({ editFood, toggleModal, brand, setBrand, kg, setKg, price, setPrice }) {
    const [errors, setErrors] = useState({}); // Estado para rastrear erros

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            toggleModal();
        }
    };

    const handleChangeBrand = (e) => {
        const value = e.target.value;
        // Verificar se o valor contém emojis
        const containsEmoji = value.match(/[\u{1F600}-\u{1F64F}]/gu);
        if (containsEmoji) {
            setErrors({ ...errors, brand: 'Não é permitido usar emojis' });
            return;
        }
        // Limitar o número de caracteres
        if (value.length > 30) {
            setErrors({ ...errors, brand: 'O nome da marca deve ter no máximo 30 caracteres' });
            return;
        }
        // Se passar pelas verificações, atualize o estado
        setBrand(value);
        // Limpe os erros
        setErrors({ ...errors, brand: '' });
    };

    const handleChangeKg = (e) => {
        const value = e.target.value;
        // Verificar se contém letras
        const containsLetters = /[a-zA-Z]/.test(value);
        if (containsLetters) {
            setErrors({ ...errors, kg: 'Não é permitido usar letras' });
            return;
        }
        // Atualize o estado
        setKg(value);
        // Limpe os erros
        setErrors({ ...errors, kg: '' });
    };

    const handleChangePrice = (e) => {
        const value = e.target.value;
        // Verificar se contém letras
        const containsLetters = /[a-zA-Z]/.test(value);
        if (containsLetters) {
            setErrors({ ...errors, price: 'Não é permitido usar letras' });
            return;
        }
        // Atualize o estado
        setPrice(value);
        // Limpe os erros
        setErrors({ ...errors, price: '' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        editFood();
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

                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control value={brand} onChange={handleChangeBrand} />
                        {errors.brand && <p className="error">{errors.brand}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="kg">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control value={kg} onChange={handleChangeKg} />
                        {errors.kg && <p className="error">{errors.kg}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control value={price} onChange={handleChangePrice} />
                        {errors.price && <p className="error">{errors.price}</p>}
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
