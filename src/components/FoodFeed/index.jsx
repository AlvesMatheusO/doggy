import axios from 'axios';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';


const Historic = () => {

    const url = "http://localhost:3333/foods";

    const [foods, setFoods] = useState([]);

    const getFoods = async () => {

        try {
            const response = await axios.get(url);
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
                            <Card.Link href="#">Editar</Card.Link>
                            <Card.Link href="#">Deletar</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
}

export default Historic;