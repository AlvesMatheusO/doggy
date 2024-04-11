import './budget.css';

export default function budgetCard() {

    return (
        <div>
            <div className='background'>
                <div className="title">
                    <h4>Você Gastou</h4>
                </div>
                <div className="spent">
                    <p>R$ 50,00</p>
                </div>
                <div className="titleKG">
                    <h4></h4>
                </div>
                <div className="spentKG">
                    <p>50Kg</p>
                </div>
                
            </div>
        </div>
    )
}