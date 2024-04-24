import './budget.css';
import fetch from '../../axios/config.js';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function BudgetCard() {

    const [monthSearch, setmonthSearch] = useState('');
    const [totalGasto, setTotalGasto] = useState(0);
    const [yearSearch, setYearSearch] = useState('');


    const meses = [
        { nome: 'Janeiro', numero: '1' },
        { nome: 'Fevereiro', numero: '2' },
        { nome: 'Março', numero: '3' },
        { nome: 'Abril', numero: '4' },
        { nome: 'Maio', numero: '5' },
        { nome: 'Junho', numero: '6' },
        { nome: 'Julho', numero: '7' },
        { nome: 'Agosto', numero: '8' },
        { nome: 'Setembro', numero: '9' },
        { nome: 'Outubro', numero: '10' },
        { nome: 'Novembro', numero: '11' },
        { nome: 'Dezembro', numero: '12' }
    ];

    const anos = [
        { ano: '2022' },
        { ano: '2023' },
        { ano: '2024' },

    ];

    const handlemonthSearchChange = (event) => {
        setmonthSearch(event.target.value);
    };
    const handleYearChange = (event) => {
        setYearSearch(event.target.value);
    };


    const calculateTotalperMonth = async () => {
        try {
            const response = await fetch("/weight", {
                params: {
                    numero: monthSearch
                }
            });
            const total = response.data[monthSearch] || 0;
            setTotalGasto(total);
        } catch (error) {
            console.error("Erro ao calcular por mês", error);
        }
    };

    return (
        <div>
            <div className='background'>
                <div className="title">
                    <h4>Você Gastou</h4>
                </div>

                <Form.Select aria-label="Default select example" id="mes" value={monthSearch} onChange={handlemonthSearchChange}>
                    <option>Selecione o mês</option>
                    {meses.map((mes) => (
                        <option key={mes.numero} value={mes.numero}>{mes.nome}</option>
                    ))}
                </Form.Select>
                <div className="spent">

                    <Form.Select aria-label="Default select example" id="ano" value={yearSearch} onChange={handleYearChange}>
                        <option value="">Selecione um ano </option>
                        {anos.map((ano) => (
                            <option key={ano.ano} value={ano.ano}>{ano.ano}</option>
                        ))}
                    </Form.Select>

                </div>
                <div className="spentKG">

                    <button onClick={calculateTotalperMonth}>Calcular</button>
                    <div className='total'>Total gasto no mês:</div>
                    <div className='totalValue'>
                        <h2>R${totalGasto.toFixed(2)}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}