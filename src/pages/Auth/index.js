import './index.css';
import Authentication from '../../components/AuthModal/authModal';
//import  Login from '../../components/LoginModal';

function Auth() {

    return(
        <div className='Container'>
            <div className='section Cadastro-modal'>
                <Authentication />
            </div>

            <div className='Login-modal'>
                {/* <Login /> */}
            </div>

        </div>
    )
}

export default Auth;