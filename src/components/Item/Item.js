import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ( {product} ) =>{

    const handleOnAdd = (quantity) =>{
        console.log(`La cantidad agregada es ${quantity}`);

    }

    return(
        <div className="product-card">
            <ul className="product-card__list">
                <li className="product-card__list__name">{product.name}</li>
                <li className="product-card__list__image"><img src={product.image} alt={product.name}/></li> 
                <li className="product-card__list__description"> {product.description} </li>
                <li className="product-card__list__detail"> <button className="product-card__list__detail__btn">Ver detalle</button></li>
                <li className="product-card__list__stock"> Stock disponible: {product.stock} </li>
            </ul>
        
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        </div>
    )
}
export default Item 