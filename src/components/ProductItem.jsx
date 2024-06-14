import { ProductList } from "./ProductList"
export const ProductItem = ({ id, title, price, photo, onMove }) => {
    return <div>
        <img src={photo}></img>
        <p>{title}</p>
        <p><strong>{price} $</strong></p>
        <button onClick={()=>onMove(id)}>move</button>
    </div>
}