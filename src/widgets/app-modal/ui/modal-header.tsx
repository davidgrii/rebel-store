import React from 'react'
import { Button } from '@/shared/components/ui/button'
import { IconX } from '@tabler/icons-react'
import { useAppModalStore } from '@/shared/store/app-modal/modal.store'

interface IProps {
  className?: string
}

export const ModalHeader: React.FC<IProps> = () => {
  const { setIsModalOpen } = useAppModalStore()

  return (
    <>
      <div
        className={
          'flex justify-between items-end px-6 md:px-8 pt-6 pb-4 border-b lg:items-start'
        }
      >
        <div className={'flex flex-col'}>
          <h4 className={'text-2xl font-bold mb-3 sm:text-3xl'}>
            Заполните форму
          </h4>
          <p className={'text-muted-foreground'}>
            И наши специалисты свяжутся с вами
          </p>
        </div>

        <Button
          variant={'ghost'}
          className={'w-9 h-9 p-0 absolute right-2 top-3'}
          onClick={() => setIsModalOpen(false)}
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
