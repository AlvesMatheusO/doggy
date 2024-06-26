import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import fetch from "../../services/config.js";
import './index.css';

const Authentication = () => {

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const register = async (e) => {
        e.preventDefault();

        try {
            
            await fetch.post("/auth/register", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });
            
            alert("Parabens! Bem vindo ao Doggy!");
            window.location.reload();

        } catch (error) {
            alert("Ocorreu um erro no seu cadastro. " + error);
            console.log(error);
            
        }
    }

    return (
        <div className="form-auth">
            <div className="auth">
                <div className="title">
                    <h4>Criar Conta</h4>
                </div>

                <div className="forms">
                    <Form onSubmit={register}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="name" value={name} onChange={(e) => setname(e.target.value)}/> 
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Repita sua senha</Form.Label>
                            <Form.Control name="confirmPassword" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>

                        <button className='button' type="submit">Adicionar</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Authentication;