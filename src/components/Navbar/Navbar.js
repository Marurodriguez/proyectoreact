import './Navbar.css'


const Navbar = () => {
    return (
        <header>
         <nav className='Navbar' >
            <img className='logo' src='images/logo.png' alt='Logo'></img>
            <h1>Romilaria Flama</h1>
            <div className='Menu'>
              <button>Ver todo</button>
              <button>Dijes</button>
              <button>Aros</button>
            </div>
         </nav>
       </header>
    )
}

export default Navbar;