import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";
import { useState } from "react";
import '../Home/index.js'

function Historic() {

    const [toggleModalDelete, setToggleModalDelete] = useState(false);

    const handleClose = () => toggleModalDelete(false);
    const handleShow = () => toggleModalDelete(true);

    function changeToggle() {
        setToggleModalDelete(!toggleModalDelete);
    }

    return (
        <div>
            <div className="Home-top">
                <Header />
            </div>
            <div className="container">
                <FoodFeed setToggleModalDelete={changeToggle} 
                        toggleModeldelete={toggleModalDelete}
                        handleClose={handleClose}
                        handleShow={handleShow} />
            </div>
        </div>
    )
}

export default Historic;