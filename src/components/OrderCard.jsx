import React from 'react'
import { useSelector } from 'react-redux'

function OrderCard({product}) {
  const cart = useSelector(state => state.cart.cart)
  const cartProduct = cart.filter((Sproduct) => { 
    return Sproduct.products[0].productId === product.id
  } )
  const Quantity =  cartProduct[0].products[0].qty

  return (
    <> 
        <div className=" flex gap-9 mt-4">
        <div className='w-20'>
          <img src={product.image} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="">Name:{product.title.shortTitle}</div>
          <div>Price:{product.price.mrp}</div>
          <div>Quantity:{Quantity}</div>
        </div>
      </div>
    </>
  )
}

export default OrderCard