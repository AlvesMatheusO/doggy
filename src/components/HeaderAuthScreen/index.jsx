import { useNavigate } from "react-router-dom";
import './header.css';
import logo from './logo.png';

function HeaderAuthScreen() {
    const navigate = useNavigate()

    return(
        <>
            <header>
                <div>
                <img className="logo" src={logo}  alt="logo"/>
                </div>

                <div>
                    <ul id="navbar">
                        <li><a>Logue para Iniciar</a></li>
                        <li><a>Sobre mim</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default HeaderAuthScreen;