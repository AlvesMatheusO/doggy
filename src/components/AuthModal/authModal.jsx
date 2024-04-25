import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import fetch from "../../axios/config";
import './index.css'
const Authentication = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="form-auth">
            <div className="auth">
                <div className="title">
                    <h4>Criar Conta</h4>
                </div>

                <div className="forms">
                    <Form > {/* adicionar onSubmit  */}
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="name" value={userName} /> {/* adicionar onChange  */}
                        </Form.Group>
                    </Form>

                    <Form > {/* adicionar onSubmit  */}
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control name="email" value={email} /> {/* adicionar onChange  */}
                        </Form.Group>
                    </Form>

                    <Form > {/* adicionar onSubmit  */}
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control name="password" value={password} /> {/* adicionar onChange  */}
                        </Form.Group>
                    </Form>

                    <Form > {/* adicionar onSubmit  */}
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Repita sua senha</Form.Label>
                            <Form.Control name="confirmPassword" value={confirmPassword} /> {/* adicionar onChange  */}
                        </Form.Group>

                        <button className='button' type="submit">Adicionar</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Authentication;