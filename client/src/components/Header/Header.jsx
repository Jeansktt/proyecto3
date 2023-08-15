import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Link to='/'>Travel Notes</Link>
        </header>
    );
};

export default Header;
