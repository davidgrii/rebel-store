import { create } from 'zustand/react'

interface ISidebarStore {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open })
}))
