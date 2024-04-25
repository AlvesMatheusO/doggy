import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import fetch from '../../axios/config.js';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="form-login">
            <div className="auth">
                <div className="title">
                    <h4>Entre na sua conta</h4>
                </div>

                <div className="forms">

                    <Form> {/* adicionar onSubmit  */}
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control name="email" value={email} /> {/* adicionar onChange  */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control name="password" value={password} /> {/* adicionar onChange  */}
                        </Form.Group>

                        <button className='button' type="submit">Adicionar</button>
                    </Form>

                </div>

            </div>
        </div>
    )
}

export default Login;