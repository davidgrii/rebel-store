import React from 'react'
import { create } from 'zustand/react'
import { debounce } from 'next/dist/server/utils'

interface ISublistStore {
  subTitle: string
  sublist: Array<{
    sub_title: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
  }>
  setSublist: (
    sublist: Array<{
      sub_title: string
      Icon: React.FC<React.SVGProps<SVGSVGElement>>
    }>,
    subTitle: string
  ) => void
}

export const useSublistStore = create<ISublistStore>((set) => {
  const debouncedSetSublist = debounce(
    (sublist, subTitle) => set({ sublist, subTitle }),
    100
  )

  return {
    subTitle: '',
    sublist: [],
    setSublist: debouncedSetSublist
  }
})
