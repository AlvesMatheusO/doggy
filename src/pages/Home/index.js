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
        </div>
    )
}

export default Home;
