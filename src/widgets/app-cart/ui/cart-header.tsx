import React from 'react'
import { Button } from '@/shared/components/ui/button'
import { IconTrash, IconX } from '@tabler/icons-react'
import { useCartStore } from '@/shared/store/app-cart/cart.store'

interface IProps {
  className?: string
}

export const CartHeader: React.FC<IProps> = () => {
  const { setIsOpen, setClearCart } = useCartStore()

  const handleClearCart = () => {
    setClearCart()
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={
          'flex justify-between items-end px-4 pt-6 pb-4 border-b md:px-9 lg:items-start'
        }
      >
        <div className={'flex flex-col items-center gap-4 lg:flex-row'}>
          <h4 className={'text-lg font-bold '}>Корзина с товарами</h4>
          <Button className={'rounded-full h-8 text-sm font-semibold'}>
            Добавить в избранное
          </Button>
        </div>

        <Button
          variant={'outline'}
          className={'rounded-full h-8 text-sm font-semibold sm:mr-4'}
          onClick={() => handleClearCart()}
        >
          <IconTrash className={'block lg:hidden'} />
          <span className={'hidden lg:block'}>Очистить корзину</span>
        </Button>

        <Button
          variant={'ghost'}
          className={'w-9 h-9 p-0 absolute right-2 top-3'}
          onClick={() => setIsOpen(false)}
        >
          <IconX
            strokeWidth={2}
            className={'w-5 h-5 text-foreground/60 hover:text-foreground'}
          />
        </Button>
      </div>
    </>
  )
}
