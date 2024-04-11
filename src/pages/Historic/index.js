import Header from "../../components/Header";
import FoodFeed from "../../components/FoodFeed";
import ModalDelete from "../../components/modalDelete";
import ModalEdit from "../../components/modalEdit";
import { useEffect, useState } from "react";
import fetch from '../../axios/config.js';
import '../Home/index.js'


function Historic() {
    
    const [brand, setBrand] = useState(null);
    const [kg, setKg] = useState(null);
    const [price, setPrice] = useState(null);

    const [toggleModalDelete, setToggleModalDelete] = useState(false);
    const [toggleModalEdit, setToggleModalEdit] = useState(false)

    const [clicekdId, setClicekdId] = useState(null)
    const id = clicekdId;

    function changeToggleDelete() {
        setToggleModalDelete(!toggleModalDelete);
        
    }

    function changeToggleEdit() {
        setToggleModalEdit(!toggleModalEdit);
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
           await fetch.delete(`/food/${id}`)
                .then( () => alert('Ração deletada com sucesso'));
                window.location.reload()
        } catch (error) {
            alert("Não foi possivel apagar sua ração. ", error)
        }
    }

    const editFood = async () => {
      
        

        try {
            await fetch.put(`/food/${id}`, {
                brand: brand,
                kg: kg,
                price: price
            }).then(alert("Ração Editada com sucesso"));
            window.location.reload();
        } catch (error) {
            alert("erro ao editar ração ", error);
        }
    }

    return (
        <div className="historic-all">
            <div className="Home-top">
                <Header />
            </div>
            <div className="container">
                <FoodFeed setToggleModalDelete={changeToggleDelete}
                    setToggleModalEdit={changeToggleEdit}
                    toggleModeldelete={toggleModalDelete} 
                    getFoods={getFoods}
                    foods={foods}
                    setClicekdId={setClicekdId}
                    />
            </div>

            {toggleModalDelete ? (
                <div className="historic-modal-delete">
                    <ModalDelete toggleModal={changeToggleDelete}
                    deleteFood={deleteFood}/>
                </div>
            )
                : (null)
            }

            {toggleModalEdit ? (
                <div className="historic-modal-edit">
                    <ModalEdit toggleModal={changeToggleEdit}
                    editFood={editFood}
                    brand={brand}
                    setBrand={setBrand}
                    kg={kg}
                    setKg={setKg}
                    price={price}
                    setPrice={setPrice} />
                </div>
            )
                : (null)
            }
        </div>
    )
}

export default Historic;