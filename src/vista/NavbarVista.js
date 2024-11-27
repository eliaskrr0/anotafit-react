import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavbarVista = () => {
    return (
        <div className='NavbarVista'>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">AnotaFit</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Inicio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarVista;