import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'
import { ProductCarousel } from '@/shared/components/product/ui/product-carousel'

interface IProps {
  className?: string
}

export const Product: React.FC<IProps> = () => {
  return (
    <div className={'w-full max-w-4xl mr-4'}>
      <div>
        <h1 className={'text-xl font-bold pb-2 md:text-[25px] lg:text-[29px]'}>
          Модульная кухня Равенна Спарк Белый/фон фреско
        </h1>

        <div className={'flex'}>
          <IconStarFilled className={'text-[#ffce00] w-3.5'} />
          <IconStarFilled className={'text-[#ffce00] w-3.5'} />
          <IconStarFilled className={'text-[#ffce00] w-3.5'} />
          <IconStarFilled className={'text-[#ffce00] w-3.5'} />
          <IconStarFilled className={'text-[#ffce00] w-3.5'} />

          <div className={'flex gap-4 items-center'}>
            <span className={'ml-2 text-sm text-[#737773]'}>(1)</span> <b>5</b>
          </div>
        </div>
      </div>

      <ProductCarousel />
    </div>
  )
}
