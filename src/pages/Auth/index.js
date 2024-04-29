import './index.css';
import Authentication from '../../components/AuthModal/authModal';
import Login from '../../components/LoginModal/loginModal.jsx';
import HeaderAuthScreen from '../../components/HeaderAuthScreen/index.jsx';

function Auth() {

    return (

        <div>

            <div>
                <HeaderAuthScreen />
            </div>

            <div className='Container'>
                <div className='section Cadastro-modal'>
                    <Authentication />
                </div>

                <div className='Login-modal'>
                    <Login />
                </div>

            </div>
        </div>
    )
}

export default Auth;