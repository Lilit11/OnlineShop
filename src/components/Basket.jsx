import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onAdd, onSub, onDel, onSale, isVisible = true , sale}) => {
    return <div>
        <h3>Basket</h3>
        <br></br>
        {
            isVisible && <button onClick={() => onSale()} > Sale </button>
        }
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm => <BasketItem key={elm.id} {...elm} onAdd={onAdd} onSub={onSub} onDel={onDel} sale={sale} />)
                }

              

            </tbody>
        </table>
    </div>
}