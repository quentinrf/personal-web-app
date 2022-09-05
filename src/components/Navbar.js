import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
//test comment 

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>QRF</Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/professional-experience' className='nav-links' onClick={closeMobileMenu}>Experience</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>RESUME</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
