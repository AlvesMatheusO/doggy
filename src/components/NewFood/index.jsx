import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fetch from '../../axios/config.js';
import './home.css';

const InsertFood = () => {

    const [brand, setBrand] = useState('');
    const [kg, setKg] = useState('');
    const [price, setPrice] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const createFood = async (e) => {
        e.preventDefault();

        try {
    
            if (parseFloat(kg) < 0) {
                setErrorMsg('Não é permitido inserir números negativos para o peso.');
                return;
            } else if (/[^\u0000-\u007F]+/.test(brand)) {
                setErrorMsg('Não é permitido inserir emojis na marca.');
                return;
            } else if (!/^[^,()\\/:{}\[\]=+\-<>?*&¨%$#@!'`´|]+$/.test(brand)) {
                    setErrorMsg('Não é permitido inserir caracteres especiais na marca.');
                    return;
            } else if (brand.length > 30) {
                setErrorMsg('Não é permitido inserir mais que 30 caracteres em marca.');
                return;
            } else if (!/^\d*\.?\d*$/.test(kg)) {
                setErrorMsg('Apenas números são permitidos no campo de peso.');
                return;
            } else if (!/^\d*\.?\d*$/.test(price)) {
                setErrorMsg('Apenas números são permitidos no campo de preço.');
                return;
            }

            await fetch.post("/food", {
                brand: brand,
                kg: kg,
                price: price
            });
            
            alert("Ração adicionada com sucesso");
            window.location.reload();
        } catch (error) {
            alert("Erro ao adicionar a nova compra de ração. " + error);
        }
    }

    return (
        <div className='form-food'>
            <div className='new-food'>
                <Form onSubmit={createFood}>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="kg">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control name="kg" value={kg} onChange={(e) => setKg(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>

                    {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                    <Button variant="outline-warning" type="submit">Enviar</Button>
                </Form>
            </div>
        </div>
    )
}

export default InsertFood;
