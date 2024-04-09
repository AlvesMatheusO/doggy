import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";
import modalDelete from "../../components/modalDelete"
import { useState } from "react";

function Historic() {

    const [toggleModalDelete, setToggleModalDelete] = useState(false);

    return (
        <div>
            <div className="Home-top">
                <Header />
            </div>
            <div className="container">
                <FoodFeed setToggleModalDelete={setToggleModalDelete} />
                { }
            </div>
        </div>
    )
}

export default Historic;