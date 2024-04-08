 import axios from 'axios';
import { useEffect, useState } from "react";

const Historic = () => {
    
    const url = "http://localhost:3333/foods";
    
    const [foods, setFoods] = useState([]);
    
     const getFoods = async () => {
        
        try {
            const response = await axios.get(
                url
            );
            const data = response.data;
            setFoods(data);
            console.log("funfou")
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
        {foods.length === 0 ? <p>carregando...</p> : <p>carregou</p>}
    
        </div>    
)
        
}

export default Historic;