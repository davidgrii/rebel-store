import React from 'react'
import { CartProduct } from '@/widgets/app-cart/ui/cart-product'

interface IProps {
  className?: string
}

export const CartProductList: React.FC<IProps> = () => {
  return (
    <>
      <div className={'grid grid-cols-1 gap-2 rounded-[8px] border-primary'}>
        <CartProduct />
        <CartProduct />
      </div>
    </>
  )
}
