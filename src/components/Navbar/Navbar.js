import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
            <div className='logo' >
              <img className='logo__img' width='80' src='images/logo.png' alt='Logo'></img>
            </div>
            
            <nav className='navbar'>
              <button className='navbar__button'>Ver todo</button>
              <button className='navbar__button'>Dijes</button>
              <button className='navbar__button'>Aros</button>
              </nav>     


            <CartWidget/>
       </header>
    )
}

export default Navbar;