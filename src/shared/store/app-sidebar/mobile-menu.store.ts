import { create } from 'zustand/react'

interface IMobileMenuStore {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export const useMobileMenuStore = create<IMobileMenuStore>((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open })
}))
