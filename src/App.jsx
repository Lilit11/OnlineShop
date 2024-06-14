import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {

  const [products, setProducts] = useState([
    { id: 101, title: "Psychology", price: 40, photo: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg", count: 0 },
    { id: 105, title: "Economics", price: 50, photo: "https://m.media-amazon.com/images/I/816KBpLt-8L._AC_UF1000,1000_QL80_.jpg", count: 0 },
    { id: 106, title: "Literature", price: 45, photo: "https://miro.medium.com/v2/resize:fit:500/1*_6RIyTrLbLUKnKTptF5fgg@2x.jpeg", count: 0 },
    { id: 107, title: "Politics", price: 50, photo: "https://images-fe.ssl-images-amazon.com/images/I/81o791tFXeS._AC_UL600_SR600,600_.jpg", count: 0 },
    { id: 108, title: "Physics", price: 60, photo: "https://images-na.ssl-images-amazon.com/images/I/814VZlo2tXL._AC_UL210_SR210,210_.jpg", count: 0 },
    { id: 109, title: "Feminism", price: 50, photo: "https://hive.dmmserver.com/media/640/97802413/9780241399002.jpg", count: 0 },
    { id: 110, title: "Chemistry", price: 45, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjrSOoGMN11mgWGJouejM7tBKii8brUQ6Vw&s", count: 0 },
    { id: 111, title: "Business", price: 50, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxQNjD0kN0GFO4DeGcSqfgYEwkQDiifDZZA&s", count: 0 },

  ])
  const [basket, setBasket] = useState([])
  const [sale, setSale] = useState(0)
  const [isVisible, setIsvisible] = useState(true)

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

  const toSell = () => {

    let saledItems = basket.filter(elm => elm.count > 3)
    
    if (saledItems.length > 0) {
      saledItems.map(elm => setSale(-elm.price))
      setBasket([...basket])
      setIsvisible(false)
    }
  }



  return (
    <>
      <div className='row'>
        <ProductList
          items={products}
          onMove={moveToCart}
        />

        <Basket
          items={basket}
          sale ={sale}
          onAdd={toAdd}
          onSub={toSub}
          onDel={toDel}
          onSale={toSell}
          isVisible={isVisible}

        />
      </div>

    </>
  )
}

export default App
