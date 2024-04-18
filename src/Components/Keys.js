import React, { useState } from 'react'

export const Keys = () => {
    
    const products=[
        {id:1,name:'LAPTOP',brand : 'dell',qty : 1},
        {id:2,name:'LAPTOP',brand : 'apple',qty : 1},
        {id:3,name:'LAPTOP',brand : 'lenovo',qty : 1},
    ]
    const [productsItem,setItem] = useState(products)
    const IncrementQty = (id) =>{
       const newItem = productsItem.map((items)=>(
        id===items.id ? {...items,qty : ++items.qty}:items
       ))
       setItem(newItem)
    }
    const DecrementQty = (id) =>{
        const newItem = productsItem.map((items)=>(
         id===items.id && items.qty>0 ? {...items,qty : --items.qty}:items
        ))
        setItem(newItem)
     }
   
  return (
    <div>
        {
           productsItem.map((item) =>
            (
                <div className='backgrnd-cls' key={item.id}>
                <h1>{item.name}</h1>
                <p>Brand : {item.brand}</p>
                <p>Quantity : {item.qty}</p>
                <button type='button' onClick={() =>IncrementQty(item.id)}>+</button>
                <button type='button' onClick={() =>DecrementQty(item.id)}>-</button>
                </div>
            )
            )
                      
        }
    </div>
  )
}
