import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import fetch from '../../axios/config.js';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const enterAccount = async (e) => {
        e.preventDefault();

        try {

            
            await fetch.post("/auth/user", {
                email: email,
                password: password
            });
            console.log(email, password);
            console.log("logado");
        } catch (error) {
            alert('Ocorreu um erro ao seu login, tente novamente ' + error)
            console.log(error);
        }
    }

    return (
        <div className="form-login">
            
            <div className="auth">
                <div className="title">
                    <h4>Entre na sua conta</h4>
                </div>

                <div className="forms">

                    <Form onSubmit={enterAccount}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                        </Form.Group>

                        <button className='button' type="submit">Adicionar</button>
                    </Form>

                </div>

            </div>
        </div>
    )
}

export default Login;