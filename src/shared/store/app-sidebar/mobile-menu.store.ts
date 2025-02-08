import { create } from 'zustand/react'

interface IMobileMenuStore {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const useMobileMenuStore = create<IMobileMenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open })
}))
