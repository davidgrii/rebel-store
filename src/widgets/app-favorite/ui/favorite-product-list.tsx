import React from 'react'
import { FavoriteProduct } from '@/widgets/app-favorite/ui/favorite-product'

interface IProps {
  className?: string
}

export const FavoriteProductList: React.FC<IProps> = () => {
  return (
    <>
      <div className={'grid grid-cols-1 gap-2 rounded-[8px] border-primary'}>
        <FavoriteProduct />
        <FavoriteProduct />
      </div>
    </>
  )
}
