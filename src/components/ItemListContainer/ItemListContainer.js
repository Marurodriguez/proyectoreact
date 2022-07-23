import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
        
    return (
        <div className='divGreeting'>
        <h1 className='h1Greeting'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer