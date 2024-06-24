import { BasketItem } from "./BasketItem"
import { useContext } from "react"
import { ProductContext } from "./context"

export const Basket = () => {

    const { state: { basket } } = useContext(ProductContext)
    const total = basket.map(book => book.price * book.count).reduce((a, b) => a + b, 0)

    return <div>
        <h3>Basket</h3>
        <br></br>

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

                    basket.map(elm => <BasketItem key={elm.id} {...elm} />)

                }

                <tr>

                    <th>Total {total}</th>
                </tr>

            </tbody>
        </table>
    </div>
}