import '../../../styles/App.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../../context/context';

function Navbar() {

    const {isLogged, setLogged} = useContext(AuthContext)

    function logout(e) {
        e.preventDefault();
        setLogged(false);
        localStorage.removeItem('logged');
    }

    return (
        <div className='navbar'>
            {isLogged
                ?
                <div className='navbar_links'>
                    <Link className='navbar_link' to='/about'>About</Link>
                    <Link className='navbar_link' to='/comments'>Comments</Link>
                    <Link className='navbar_link' to='/login' onClick={logout}>Log out</Link>
                </div>
                :
                <div className='navbar_links'>
                    <Link className='navbar_link' to='/about'>About</Link>
                    <Link className='navbar_link' to='/login'>Log in</Link>
                </div>
            }
        </div>
    );
}

export default Navbar;
