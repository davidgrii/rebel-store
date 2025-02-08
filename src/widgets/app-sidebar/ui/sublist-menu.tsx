import React from 'react'
import { useSublistStore } from '@/shared/store/app-sidebar/sublist.store'

interface IProps {
  className?: string
}

export const SubListMenu: React.FC<IProps> = () => {
  const { sublist, subTitle } = useSublistStore()

  return (
    <>
      <div className={'py-8 px-6 w-full'}>
        <h3 className={'text-lg font-bold mb-3'}>{subTitle}</h3>
        <ul className={'grid grid-cols-2 bg-background'}>
          {sublist.map(({ sub_title, Icon }) => (
            <li
              key={sub_title}
              className={
                'flex flex-col justify-center items-center h-36 w-full cursor-pointer transition duration-300 hover:bg-[#ebebeb] rounded'
              }
            >
              <div className={'pb-8 h-24 flex justify-center items-center'}>
                <Icon />
              </div>
              <span className={'block text-sm text-center'}>{sub_title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
