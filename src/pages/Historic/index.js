import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";
import ModalDelete from "../../components/modalDelete"

import { useState } from "react";
import '../Home/index.js'

function Historic() {


    const [id, setID] = useState(null);
    const [toggleModalDelete, setToggleModalDelete] = useState(false);

    function changeToggle() {
        setToggleModalDelete(!toggleModalDelete);
    }


    const deleteFood = async () => {

        try {
            const deleteR = await fetch.delete(`/food/${id}`)
                .then(('Ração deletada com sucesso'))
        } catch (error) {
            alert("Não foi possivel apagar sua ração. ", error)
        }

    }

    return (
        <div className="historic-all">
            <div className="Home-top">
                <Header />
            </div>
            <div className="container">
                <FoodFeed setToggleModalDelete={changeToggle}
                    toggleModeldelete={toggleModalDelete} />
            </div>

            {toggleModalDelete ? (
                <div className="historic-modal-delete">
                    <ModalDelete toggleModal={changeToggle}/>
                </div>
            )
                : (null)
            }
        </div>
    )
}

export default Historic;