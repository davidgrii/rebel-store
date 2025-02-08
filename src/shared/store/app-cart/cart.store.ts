import { create } from 'zustand'

interface ICartStore {
  isOpen: boolean
  products: number
  isShowEmptyMessage: boolean
  setIsOpen: (open: boolean) => void
  setIsProduct: (open: number) => void
  setClearCart: () => void
  setIsShowEmptyMessage: (open: boolean) => void
}

export const useCartStore = create<ICartStore>((set) => ({
  isOpen: false,
  products: 0,
  isShowEmptyMessage: false,

  setIsOpen: (open) => set({ isOpen: open }),

  setIsProduct: (product) => set({ products: product }),

  setClearCart: () => set({ products: 0 }),

  setIsShowEmptyMessage: (open) => set({ isShowEmptyMessage: open })
}))
