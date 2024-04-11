import Header from "../../components/Header";
import NewFood from "../../components/NewFood"

function Home () {

    return(
        <div>
            <div className="Home-top">
                <Header/> 
            </div>

            <div>
            
                <NewFood/>
            </div>
        </div>
    )
}

export default Home;