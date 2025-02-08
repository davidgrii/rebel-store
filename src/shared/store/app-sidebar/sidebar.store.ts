import { create } from 'zustand/react'

interface IMenuStore {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const useMenuStore = create<IMenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open })
}))
