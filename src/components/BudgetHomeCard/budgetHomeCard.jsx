import './budget.css';
import fetch from '../../axios/config.js';
import React, { useState } from "react";

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
                    
                    <select id="mes" value={monthSearch} onChange={handlemonthSearchChange}>
                        <option value="">Selecione um mês </option>
                        {meses.map((mes) => (
                            <option key={mes.numero} value={mes.numero}>{mes.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="spent">
                    
                    <select id="ano" value={yearSearch} onChange={handleYearChange}>
                        <option value="">Selecione um ano </option>
                        {anos.map((ano) => (
                            <option key={ano.ano} value={ano.ano}>{ano.ano}</option>
                        ))}

                    </select>
                </div>
                <div className="spentKG">
                
                    <button onClick={calculateTotalperMonth}>Calcular</button>
                    <div>Total gasto no mês: R${totalGasto.toFixed(2)}</div>
                </div>

            </div>
        </div>
    )
}