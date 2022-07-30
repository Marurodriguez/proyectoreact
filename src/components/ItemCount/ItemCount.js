import './ItemCount.css'
import React from 'react'
import {useState} from 'react'



const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState (initial)


    const increment = () =>{

    count<stock ?

    setCount (count + 1)
    :
    setCount (count)

    }

    const decrement = () =>{
        count >= 1 ? 
    setCount (count - 1)  
    :
    setCount (count)  
    } 
     
    return (
        <div className='counter'>
            <div className='counter__button'>
            <button className="counter__button__increment" onClick={increment}>+</button>
            <p className="counter__p">{count}</p>
            <button className="counter__button__decrement" onClick={decrement}>-</button>
            </div>
            <button className="counter__carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
         </div>
    )

}

export default ItemCount