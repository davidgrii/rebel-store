import { create } from 'zustand/react'

interface IFavoriteStore {
  isFavoriteOpen: boolean
  favoriteProducts: number
  isShowFavEmptyMessage: boolean
  setIsFavoriteOpen: (open: boolean) => void
  setIsFavoriteProduct: (open: number) => void
  setClearFavorite: () => void
  setIsShowFavEmptyMessage: (open: boolean) => void
}

export const useFavoriteStore = create<IFavoriteStore>((set) => ({
  isFavoriteOpen: false,
  favoriteProducts: 0,
  isShowFavEmptyMessage: false,

  setIsFavoriteOpen: (open) => set({ isFavoriteOpen: open }),

  setIsFavoriteProduct: (product) => set({ favoriteProducts: product }),

  setClearFavorite: () => set({ favoriteProducts: 0 }),

  setIsShowFavEmptyMessage: (open) => set({ isShowFavEmptyMessage: open })
}))