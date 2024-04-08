import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const InsertFood = () => {
    return (
        <div className='new-food'>
            <Form>
                
                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control name="marca" id='brand'  />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1"> 
                    <Form.Label>Peso</Form.Label>
                    <Form.Control name='peso' id='kg' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control name='preco' id='price' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default InsertFood;