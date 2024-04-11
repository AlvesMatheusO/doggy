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

                <NewFood />

                <div className="budget">

                    <BudgetCard />
                </div>

            </div>
        </div>
    )
}

export default Home;