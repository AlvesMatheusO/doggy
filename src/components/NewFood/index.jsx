import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fetch from '../../axios/config.js'

const InsertFood = () => {

    const [brand, setBrand] = useState();
    const [kg, setKg] = useState();
    const [price, setPrice] = useState();

    const createFood = async (e) => {
        e.preventDefault();

        await fetch.post("/food", {
            brand: brand,
            kg: kg,
            price: price
        });


    }


    return (
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

                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default InsertFood;