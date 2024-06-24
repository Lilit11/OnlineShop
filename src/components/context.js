import React, { act, useContext } from "react";
export const ProductContext = React.createContext()

export const initialState = {
    products: [
        { "id": 101, "title": "Psychology", "price": 40, "photo": "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg", "count": 0 },
        { "id": 105, "title": "Economics", "price": 50, "photo": "https://m.media-amazon.com/images/I/816KBpLt-8L._AC_UF1000,1000_QL80_.jpg", "count": 0 },
        { "id": 106, "title": "Literature", "price": 45, "photo": "https://miro.medium.com/v2/resize:fit:500/1*_6RIyTrLbLUKnKTptF5fgg@2x.jpeg", "count": 0 },
        { "id": 107, "title": "Politics", "price": 50, "photo": "https://images-fe.ssl-images-amazon.com/images/I/81o791tFXeS._AC_UL600_SR600,600_.jpg", "count": 0 },
        { "id": 108, "title": "Physics", "price": 60, "photo": "https://images-na.ssl-images-amazon.com/images/I/814VZlo2tXL._AC_UL210_SR210,210_.jpg", "count": 0 },
        { "id": 109, "title": "Feminism", "price": 50, "photo": "https://hive.dmmserver.com/media/640/97802413/9780241399002.jpg", "count": 0 },
        { "id": 110, "title": "Chemistry", "price": 45, "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjrSOoGMN11mgWGJouejM7tBKii8brUQ6Vw&s", "count": 0 },
        { "id": 111, "title": "Business", "price": 50, "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxQNjD0kN0GFO4DeGcSqfgYEwkQDiifDZZA&s", "count": 0 }
    ],
    basket: [],

}

export const reducer = (state, action) => {

    switch (action.type) {
        case 'DEL':
            return {
                ...state,
                basket: state.basket.filter(book => book.id != action.payload)
            }
        case 'MOVE':
            const inBasket = state.basket.find(book => book.id == action.payload)
            const found = state.products.find(book => book.id == action.payload)
            return {
                ...state,
                basket: inBasket ? state.basket.map(book =>
                    book.id === action.payload ? { ...book, count: book.count + 1 } : book) : [...state.basket, { ...found, count: 1 }]
            }
        case 'ADD':
            return {
                ...state,
                basket: state.basket.map(book => book.id == action.payload ? { ...book, count: book.count + 1 } : book)
            }
        case 'SUB':
            return {
                ...state,
                basket: state.basket.map(book => book.id == action.payload && book.count > 1 ? { ...book, count: book.count - 1 } : book)
            }
        default: return state
    }

} 