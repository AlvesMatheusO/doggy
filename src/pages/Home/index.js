import Header from "../../components/Header";
import NewFood from "../../components/NewFood";
import BudgetCard from "../../components/BudgetHomeCard/budgetHomeCard";

import './home.css';
import chart1 from '../../assets/graph1.png';
import chart2 from '../../assets/graph2.png';

function Home() {
    return (
        <div>
            <div className="Home-top">
                <Header />
            </div>

            <div className="dashboard">
                <div className="section new-food-section">
                    <NewFood />
                </div>

                <div className="section budget-section">
                    <BudgetCard />
                </div>
            </div>

            <div className="dashboard">
                <div className="section chart-section">
                    <div className="chart">
                        <h5>Total Gasto por mês</h5>
                        <img src={chart1} alt="Imagem 1" />
                    </div>
                </div>

                <div className="section chart-section">
                    <div className="chart">
                        <h5>Rações Compradas</h5>
                        <img src={chart2} alt="Imagem 2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
