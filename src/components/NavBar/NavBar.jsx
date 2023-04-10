import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';
const estiloBoton = {
    'margin': '4px'
}

const NavBar = () => {
    return (
        <nav>
            <h4>Tienda Virtual</h4>
            <div>
                <Button variant='info' style={estiloBoton}>Motor</Button>
                <Button variant='info' style={estiloBoton}>Electricidad</Button>
                <Button variant='info' style={estiloBoton}>Suspensión</Button>
                <Button variant='info' style={estiloBoton}>Embragues</Button>
            </div>
            <CartWidget />
        </nav>
    );
}
export default NavBar;