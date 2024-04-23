import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./index.css";
import api from '../../axios/config.js';

export default function ModalEdit({ editFood, toggleModal, setClicekdId }) {
    const [brand, setLocalBrand] = useState('');
    const [kg, setLocalKg] = useState('');
    const [price, setLocalPrice] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // Função para buscar os dados da comida com o ID correspondente
        const fetchFoodData = async () => {
            try {
                const response = await api.get(`/food/${setClicekdId}`);
                const foodData = response.data;
                // Atualiza os estados locais com os dados obtidos
                setLocalBrand(foodData.brand);
                setLocalKg(foodData.kg);
                setLocalPrice(foodData.price);
            } catch (error) {
                console.error('Erro ao obter os dados da comida:', error);
            }
        };

        // Chama a função para buscar os dados da comida apenas se setClicekdId não for vazio
        if (setClicekdId) {
            fetchFoodData();
        }
    }, [setClicekdId]);

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            toggleModal();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos
        if (brand.trim() === '') {
            setErrorMsg('Por favor, insira a marca.');
            return;
        }
        if (!/^\d*\.?\d*$/.test(kg)) {
            setErrorMsg('Apenas números são permitidos no campo de peso.');
            return;
        }
        if (parseFloat(kg) < 0) {
            setErrorMsg('Não é permitido inserir números negativos para o peso.');
            return;
        }
        if (!/^\d*\.?\d*$/.test(price)) {
            setErrorMsg('Apenas números são permitidos no campo de preço.');
            return;
        }
        if (brand.length > 30) {
            setErrorMsg('Não é permitido inserir mais que 30 caracteres na marca.');
            return;
        }

        // Se passar por todas as validações, chama a função de edição
        try {
            await editFood({
                _id: setClicekdId,
                brand,
                kg,
                price
            });
        } catch (error) {
            console.error('Erro ao editar a comida:', error);
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

                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control value={brand} onChange={(e) => setLocalBrand(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="kg">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control value={kg} onChange={(e) => setLocalKg(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control value={price} onChange={(e) => setLocalPrice(e.target.value)} />
                    </Form.Group>

                    {errorMsg && <p className="error-message">{errorMsg}</p>}

                    <div className="buttonList">
                        <button type="button" onClick={toggleModal}>Cancelar</button>
                        <button type="submit" className="button-default">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
