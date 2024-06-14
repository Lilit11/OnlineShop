export const BasketItem = ({id, title, price, count,onAdd, onSub, onDel, sale})=>{
    return <tr>
       <td>{title}</td>
       <td>{price}</td>
       <td>{count}</td>
       <td>{price*count + sale}</td>
       <td>
        <button onClick={()=>onAdd(id)}>+</button>
        <button onClick={()=>onSub(id)}>-</button>
        <button onClick={()=>onDel(id)}>X</button>
       </td>
    </tr>
}