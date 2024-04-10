import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import fetch from '../../axios/config.js';
import ModalDelete from "../../components/modalDelete"
import './index.css';


const Historic = ({ setToggleModalDelete, toggleModeldelete, handleClose, handleShow }) => {


    const [foods, setFoods] = useState([]);
    const [id, setID] = useState(null);

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

    const deleteFood = async () => {

        try {
            const deleteR = await fetch.delete(`/food/${id}`)
                .then(('Ração deletada com sucesso'))
        } catch (error) {
            alert("Não foi possivel apagar sua ração. ", error)
        }

    }


    useEffect(() => {
        getFoods();
    }, []);

    return (
        <div>
            <h1>Historico de rações</h1>
            <Container className='foodItem'>
                {foods.map((food) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{food.brand}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{food.kg.$numberDecimal} Kg</Card.Subtitle>
                            <Card.Text>R$ {food.price.$numberDecimal},00</Card.Text>
                            <Card.Text>{food.date}</Card.Text>
                            <Card.Link href="#edit">Editar</Card.Link>
                            <Card.Link href="#delete" onClick={() => {
                                setToggleModalDelete();
                            }}>Deletar</Card.Link>

                        </Card.Body>
                    </Card>
                ))}
            </Container>
            {toggleModeldelete ?
                (
                    <ModalDelete deleteFood={deleteFood}/>
                )
                : (
                    null
                )}
        </div>
    )
}

export default Historic;