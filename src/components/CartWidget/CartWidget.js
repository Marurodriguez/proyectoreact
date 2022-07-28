import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img className='cartWidget__cart' src='images/cart.png' alt='cart' />
            <p className='cartWidget__p'>10</p>
        </div>
    )
}

export default CartWidget