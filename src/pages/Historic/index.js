import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";

function Historic () {


    return(
        <div>
            <div className="Home-top">
                <Header/> 
            </div>
            <div className="container">
                <FoodFeed/>
            </div>
        </div>
    )
}

export default Historic;