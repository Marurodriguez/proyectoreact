import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
        
    const handleOnAdd = (quantity) =>{
        console.log(`La cantidad agregada es ${quantity}`);

    }
    
    return (
        <div className='divGreeting'>
        <h1 className='h1Greeting'>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
        </div>
        
    )
    
}

export default ItemListContainer