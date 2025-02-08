import React from 'react'
import { Button } from '@/shared/components/ui/button'
import { useCartStore } from '@/shared/store/app-cart/cart.store'
import { useAppModalStore } from '@/shared/store/app-modal/modal.store'

interface IProps {
  className?: string
}

export const CartFooter: React.FC<IProps> = () => {
  const { setIsOpen } = useCartStore()
  const { setIsModalOpen } = useAppModalStore()

  const handleRequest = () => {
    setIsModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <div className={'flex flex-col px-4 pb-6 border-t pt-4 md:px-9'}>
        <div className={'text-right font-semibold mb-3 sm:mr-4  sm:mb-6'}>
          <span className={'text-sm sm:text-lg mr-2'}>Итого:</span>
          <span className={'text-xl sm:text-2xl font-bold'}>9999₽</span>
        </div>

        <div className={'flex flex-col gap-4 justify-between sm:flex-row'}>
          <Button
            onClick={() => setIsOpen(false)}
            variant={'secondary'}
            className={
              'text-[16px] py-4 px-4 h-11 order-1 w-full font-semibold hover:bg-foreground/10 sm:-order-1 sm:max-w-64'
            }
          >
            Продолжить покупки
          </Button>

          <Button
            onClick={handleRequest}
            className={
              'text-[16px] py-4 h-11 px-4 w-full font-semibold sm:max-w-64'
            }
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </>
  )
}
