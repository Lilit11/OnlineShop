import { useContext } from "react"
import { ProductContext } from "./context.js"

export const BasketItem = ({ id, title, price, count }) => {

    const { dispatch } = useContext(ProductContext)

    return <tr>

        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price * count}</td>
        <td>
            <button onClick={() => dispatch({ type: 'ADD', payload: id })}>+</button>
            <button onClick={() => dispatch({ type: 'SUB', payload: id })}>-</button>
            <button onClick={() => dispatch({ type: 'DEL', payload: id })}>X</button>
        </td>
    </tr>
}