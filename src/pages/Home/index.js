import Header from "../../components/Header";
import NewFood from "../../components/NewFood";
import BudgetCard from "../../components/BudgetHomeCard/budgetHomeCard";

import './home.css';

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
