import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './index.css';

const Historic = ({ setToggleModalDelete, setToggleModalEdit, foods, setClicekdId }) => {
    
    const reversedFoods = [...foods].reverse();

    return (
        <div className="historic-container">
            <h1 className="historic-title">Histórico de Rações</h1>
            <Container className='foodItem'>
                {reversedFoods.map((food) => (
                    <Card key={food._id} className="food-card">
                        <Card.Body>
                            <Card.Title className="food-brand">{food.brand}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted food-kg">{food.kg.$numberDecimal} Kg</Card.Subtitle>
                            <Card.Text className="food-price">R$ {food.price.$numberDecimal}</Card.Text>
                            <Card.Text className="food-date">{food.date}</Card.Text>
                            <div className="food-actions">
                                <Button variant="primary" onClick={() => {
                                    setClicekdId(food._id);
                                    setToggleModalEdit();
                                }}>Editar</Button>
                                <Button variant="danger" onClick={() => {
                                    setClicekdId(food._id);
                                    setToggleModalDelete();
                                }}>Deletar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
}

export default Historic;
