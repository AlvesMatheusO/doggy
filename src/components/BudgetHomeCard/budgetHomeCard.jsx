import './budget.css';
import fetch from '../../axios/config.js';
import React, { useEffect, useState } from "react";

export default function BudgetCard() {

    const [totalMoneySpent, setTotalMoneySpent] = useState(null);
    const [totalKG, setTotalKG] = useState(null);


   React.useEffect(() => {
        fetch.get("/calculatePrice").then((response) => {
            setTotalMoneySpent(response.data);
        });

        fetch.get("/calculateKg").then((response) => {
            setTotalKG(response.data);
        });
    }, []);

    return (
        <div>
            <div className='background'>
                <div className="title">
                    <h4>Você Gastou</h4>
                </div>
                <div className="spent">
                    <p>R$ {totalMoneySpent}</p>
                </div>
                <div className="titleKG">
                    <h4></h4>
                </div>
                <div className="spentKG">
                    <p>{totalKG} Kg</p>
                </div>
                
            </div>
        </div>
    )
}