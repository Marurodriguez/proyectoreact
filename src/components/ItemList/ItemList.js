import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="ItemList">
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </div>      
    )
}

export default ItemList 