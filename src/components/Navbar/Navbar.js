import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
         <nav className='Navbar' >
            <div>
            <img className='logo' src='images/logo.png' alt='Logo'></img>
            <h1>Romilaria Flama</h1>
            </div>
            
            <div className='Menu'>
              <button>Ver todo</button>
              <button>Dijes</button>
              <button>Aros</button>
            </div>
            <CartWidget/>
        
         </nav>

       </header>
    )
}

export default Navbar;