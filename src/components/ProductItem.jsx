import { ProductList } from "./ProductList"
import { useContext } from "react"
import { ProductContext } from "./context.js"

export const ProductItem = ({ id, title, price, photo }) => {

    const { dispatch } = useContext(ProductContext)

    return <div>
        <img src={photo}></img>
        <p>{title}</p>
        <p><strong>{price} $</strong></p>
        <button onClick={() => dispatch({ type: 'MOVE', payload: id })}>move</button>
    </div>
}



