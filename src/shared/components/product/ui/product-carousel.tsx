import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shared/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface IProps {
  className?: string
}

const images = [
  { id: 1, src: '/65bb7fbbef99b936848476.jpg', alt: 'Image 1' },
  { id: 2, src: '/65bb7fbbef99b936848476.jpg', alt: 'Image 2' },
  { id: 3, src: '/65bb7fbbef99b936848476.jpg', alt: 'Image 3' }
]

export const ProductCarousel: React.FC<IProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <div className='mt-7 group cursor-pointer bg-foreground'>
        <Carousel
          opts={{
            loop: true,
            startIndex: selectedIndex
          }}
          plugins={[
            Autoplay({
              delay: 55000
            })
          ]}
        >
          <CarouselContent className='bg-foreground'>
            {images.map((image) => (
              <CarouselItem key={image.id} className='w-full h-full'>
                <Image
                  className='w-full lg:h-[500px] object-cover'
                  width={1000}
                  height={550}
                  src={image.src}
                  alt={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={
              'hidden shadow-lg  border-0 text-foreground bg-background w-10 h-10 duration-300 transition hover:bg-background hover:text-foreground/65 opacity-0 md:flex group-hover:opacity-90'
            }
          />{' '}
          <CarouselNext
            className={
              'hidden shadow-lg w-10 h-10 bg-background border-0 text-foreground duration-300 transition hover:bg-background hover:text-foreground/65 opacity-0 md:flex group-hover:opacity-90'
            }
          />{' '}
        </Carousel>
      </div>

      <div className='flex mt-4 justify-center gap-1'>
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className={`flex justify-center items-center p-1 relative w-24 h-14 rounded sm:p-1.5 border ${
              selectedIndex === index ? 'border-primary' : 'border-[#ebebeb]'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={75}
              height={40}
              className={`transition-opacity duration-300 rounded h-10 ${
                selectedIndex === index ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </button>
        ))}
      </div>
    </>
  )
}
