import { create } from 'zustand'

interface IAppModalStore {
  isOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

export const useAppModalStore = create<IAppModalStore>((set) => ({
  isOpen: true,

  setIsModalOpen: (open) => set({ isOpen: open })
}))
