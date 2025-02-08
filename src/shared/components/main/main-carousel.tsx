import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shared/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
}

export const MainCarousel: React.FC<IProps> = () => {
  return (
    <>
      <div className={'group cursor-pointer'}>
        <Carousel
          opts={{
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 55000
            })
          ]}
        >
          <CarouselContent>
            {[1, 2].map((_, index) => (
              <CarouselItem key={index} className={'max-h-fit'}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                  <Image
                    className={'w-full'}
                    width={1000}
                    height={450}
                    src={'/main.jpg'}
                    alt='banner'
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={
              'hidden shadow-lg  border-0 text-foreground bg-background w-10 h-10 duration-300 transition hover:bg-background hover:text-foreground/65 opacity-0 md:flex group-hover:opacity-90'
            }
          />

          <CarouselNext
            className={
              'hidden shadow-lg w-10 h-10 bg-background border-0 text-foreground duration-300 transition hover:bg-background hover:text-foreground/65 opacity-0 md:flex group-hover:opacity-90'
            }
          />
        </Carousel>
      </div>
    </>
  )
}
