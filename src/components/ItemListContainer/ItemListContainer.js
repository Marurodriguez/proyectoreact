import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getProductsFromBD } from '../../asyncMock'

import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProductsFromBD().then(products => {
            setProducts(products)
        })
    }, [])


    return (
        <div className='ItemListContainer'>
            <div className='divGreeting'>
            <h1 className='h1Greeting'>{greeting}</h1>
            </div>

            <div className='ItemListContainer__products'>
            <ItemList products={products} />
            </div>
        
        </div>
        
    )
    
}

export default ItemListContainer