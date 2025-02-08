import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AdditionalServices } from '@/widgets/app-sidebar/ui/additional-services'
import { MobileCategoriesList } from '@/widgets/app-header/ui/mobile-categories-list'
import { Button } from '@/shared/components/ui/button'
import { IconX } from '@tabler/icons-react'
import { useMobileMenuStore } from '@/shared/store/app-sidebar/mobile-menu.store'

interface IProps {
  className?: string
}

export const MobileSidebar: React.FC<IProps> = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenuStore()

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full bg-foreground/45 lg:hidden'
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className='fixed left-0 top-0 z-50 w-10/12 bg-background h-screen shadow-lg'
      >
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className='absolute -right-16 top-3'
            >
              <Button
                variant='ghost'
                className='w-9 h-9 p-0'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IconX strokeWidth={2} className='w-9 h-9 text-background' />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <MobileCategoriesList />
        <AdditionalServices />
      </motion.aside>
    </>
  )
}
