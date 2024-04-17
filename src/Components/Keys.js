import React from 'react'

export const Keys = () => {
    const products=[
        {name:'LAPTOP',brand : 'dell',qty : 1},
        {name:'LAPTOP',brand : 'apple',qty : 1},
        {name:'LAPTOP',brand : 'lenovo',qty : 1},
    ]
  return (
    <div>
        {
           products.map((item) =>
            (
                <div className='backgrnd-cls'>
                <h1>{item.name}</h1>
                <p>Brand : {item.brand}</p>
                <p>Quantity : {item.qty}</p>
                </div>
            )
            )
                      
        }
    </div>
  )
}
