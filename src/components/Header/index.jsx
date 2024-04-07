import { useNavigate } from "react-router-dom";
import './header.css';
import logo from './logo.png'

function Header() {
    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate("/");
    }
    const navigateToHistoric = () => {
        navigate("/historic")
    }

    return(
        <>
            <header>
                <div onClick={navigateToHome}>
                <img className="logo" src={logo}  alt="logo"/>
                </div>

                <div>
                    <ul id="navbar">
                        <li><a onClick={navigateToHome}>Home</a></li>
                        <li><a onClick={navigateToHistoric}>Histórico</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;