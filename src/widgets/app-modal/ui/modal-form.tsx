import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/shared/types/zod/contact-form-schema'
import { FormErrors } from './form-errors'
import { Button } from '@/shared/components/ui/button'
import { IconLoader2 } from '@tabler/icons-react'

type IForm = {
  name: string
  email: string
  phoneNumber?: string
}

interface IProps {
  className?: string
}

export const ModalForm: React.FC<IProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IForm>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if (res.ok) {
      alert('Message sent successfully!')
    } else {
      alert(`Failed to send message: ${result.error}`)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={'m-6'}>
        <div className='grid grid-cols-1 gap-x-8 text-[15px] gap-y-3 sm:grid-cols-2 text-left sm:gap-y-6'>
          <div className='sm:col-span-2'>
            <input
              type='text'
              id='name'
              {...register('name')}
              autoComplete='given-name'
              placeholder='Ваше имя'
              className='block w-full border border-[#959991] rounded py-3.5 px-5 focus:outline-none focus:ring-1 ring-primary'
            />

            <FormErrors message={errors.name?.message} />
          </div>
          <div className='sm:col-span-2'>
            <input
              type='email'
              id='email'
              {...register('email')}
              placeholder='Email'
              autoComplete='email'
              className='block w-full border border-[#959991] rounded py-3 px-5 focus:outline-none focus:ring-1 ring-primary'
            />

            <FormErrors message={errors?.email?.message} />
          </div>
          <div className='sm:col-span-2'>
            <input
              type='tel'
              id='phone-number'
              {...register('phoneNumber')}
              placeholder='Номер телефона'
              autoComplete='tel'
              className='block w-full border border-[#959991]  rounded py-3 px-5 focus:outline-none focus:ring-1 ring-primary'
            />

            <FormErrors message={errors.phoneNumber?.message} />
          </div>
        </div>

        <Button
          type='submit'
          className='rounded-[8px] text-[16px] mt-6 w-full h-12 px-5 py-3 sm:text-lg font-semibold'
        >
          {isSubmitting ? (
            <IconLoader2 className='block h-8 w-8 animate-spin' />
          ) : (
            'Оставить заявку'
          )}
        </Button>
      </form>
    </>
  )
}
