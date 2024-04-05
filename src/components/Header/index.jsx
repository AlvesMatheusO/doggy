import { Link, useNavigate } from "react-router-dom";
import './header.css';

function Header() {
    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate("/");
    }

    return(
        <div>
            <header className="header">
                <div className="logo" onClick={navigateToHome}>Home</div>
                {/* <Link className="logo" to="/">Home</Link>
                <Link className="historic" to="/historic">Historic</Link> */}
            </header>
        </div>
    )
}

export default Header;