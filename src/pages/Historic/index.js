import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";
import ModalDelete from "../../components/modalDelete"
import { useEffect, useState } from "react";
import fetch from '../../axios/config.js';
import '../Home/index.js'

function Historic() {


    const [id, setID] = useState(null);
    const [toggleModalDelete, setToggleModalDelete] = useState(false);

    function changeToggle() {
        setToggleModalDelete(!toggleModalDelete);
    }

    const [foods, setFoods] = useState([]);


    const getFoods = async () => {

        try {
            const response = await fetch.get('/food');
            const data = response.data;
            setFoods(data);
            console.log("funfou")
            console.log(data)
        } catch (error) {
            console.log(error);
            alert("Não foi possivel carregador suas inserções, tente recarregar a página.");
        }
    };

    useEffect(() => {
        getFoods();
    }, []);


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
                    toggleModeldelete={toggleModalDelete} 
                    getFoods={getFoods}
                    foods={foods}
                    />
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