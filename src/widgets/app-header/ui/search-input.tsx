'use client'

import { Input } from '@/shared/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { SearchIcon } from '@/shared/icons'
import { IconLoader2, IconX } from '@tabler/icons-react'

interface IProps {
  className?: string
}

export const SearchInput: React.FC<IProps> = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const handleChange = (value: string) => {
    setSearch(value)

    console.log(value)
  }

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsActive(false)}
            className={
              'bg-black/40 fixed z-20 top-0 left-0 right-0 bottom-0 w-full'
            }
          ></motion.div>
        )}
      </AnimatePresence>

      <div
        className={
          'relative z-30 basis-full mt-4 max-w-4xl order-3 lg:order-none lg:mx-8 lg:mt-0 lg:basis-full'
        }
      >
        <span className={'absolute left-4 top-3 w-5'}>
          <SearchIcon />
        </span>

        <Input
          onChange={(e) => handleChange(e.target.value)}
          onClick={() => setIsActive(true)}
          className={
            'bg-secondary h-11 rounded pl-10 border-none focus:ring-1 ring-primary'
          }
          type={'search'}
        />

        {isActive && search === '' && (
          <IconX
            onClick={() => setIsActive(false)}
            strokeWidth={2}
            className={
              'absolute right-3 top-3 w-5 h-5 cursor-pointer transition-colors text-foreground/60 hover:text-foreground'
            }
          />
        )}

        {isActive && search && (
          <IconLoader2
            className={
              'absolute text-primary right-4 top-3 w-5 h-5 animate-spin'
            }
          />
        )}
      </div>
    </>
  )
}
