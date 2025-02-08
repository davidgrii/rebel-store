'use client'

import React, { useEffect, useRef } from 'react'
import { ModalForm } from '@/widgets/app-modal/ui/modal-form'
import { useAppModalStore } from '@/shared/store/app-modal/modal.store'
import { ModalHeader } from '@/widgets/app-modal/ui/modal-header'

interface IProps {
  className?: string
}

export const AppModal: React.FC<IProps> = () => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { isOpen, setIsModalOpen } = useAppModalStore()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className={
            'bg-black/45 fixed z-50 top-0 left-0 right-0 bottom-0 w-full transition duration-[400ms] ease-in-out h-full overflow-y-scroll'
          }
        >
          <aside
            ref={modalRef}
            tabIndex={-1}
            className={
              'absolute top-1/2 left-1/2 w-11/12 max-w-2xl bg-background rounded-[8px] transform -translate-x-1/2 -translate-y-1/2'
            }
          >
            <ModalHeader />

            <ModalForm />
          </aside>
        </div>
      )}
    </>
  )
}
