import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {

  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  //const [isVisible, setIsvisible] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])


  useEffect(() => {
    setTotal(basket.reduce((a,b)=>a+(b.price* b.count),0))
  }, [basket])


  const moveToCart = id => {
    let found = products.find(x => x.id == id)
    let index = basket.findIndex(i => i.id === found.id)
    if (!basket.find(x => x.id == found.id)) {

      setBasket([...basket, { ...found, count: 1 }])


    } else {
      basket[index].count += 1
      setBasket([...basket])

    }

  }

  const toAdd = id => {
    let index = basket.findIndex(x => x.id === id)
    basket[index].count += 1
    setBasket([...basket])


  }

  const toSub = id => {
    let index = basket.findIndex(x => x.id === id)
    if (basket[index].count > 1) {
      basket[index].count -= 1
      setBasket([...basket])

    }
  }
  const toDel = id => {
    setBasket(basket.filter(elm => elm.id !== id))

  }



  // const toSell = () => {

  //   let saledItems = basket.filter(elm => elm.count > 3)

  //   if (saledItems.length > 0) {
  //     saledItems.map(elm => setSale(-elm.price))
  //     setBasket([...basket])
  //     setIsvisible(false)
  //   }
  // }



  return (
    <>
      <div className='row'>
        <ProductList
          items={products}
          onMove={moveToCart}
        />

        <Basket
          items={basket}
          // sale ={sale}
          onAdd={toAdd}
          onSub={toSub}
          onDel={toDel}
          total={total}
        // isVisible={isVisible}

        />
      </div>

    </>
  )
}

export default App
