import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './index.css';


const Historic = ({ setToggleModalDelete,setToggleModalEdit , foods, setClicekdId}) => {


    return (
        <div>
            <h1>Historico de rações</h1>
            <Container className='foodItem'>
                {foods.map((food) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{food.brand}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{food.kg.$numberDecimal} Kg</Card.Subtitle>
                            <Card.Text>R$ {food.price.$numberDecimal}</Card.Text>
                            <Card.Text>{food.date}</Card.Text>
                            <Card.Link href="#edit" onClick={()=> {
                                setClicekdId(food._id)
                                setToggleModalEdit();
                            }}>Editar</Card.Link>

                            <Card.Link href="#delete" onClick={() => {
                                setClicekdId(food._id)
                                setToggleModalDelete();
                            }}>Deletar</Card.Link>

                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
}

export default Historic;