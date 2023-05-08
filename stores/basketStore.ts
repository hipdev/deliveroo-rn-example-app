import { create } from 'zustand'
import { Dish } from '../sanity/types/schema'

interface BasketStore {
  items: Dish[]
  addItem: (item: Dish) => void
  removeItem: (item: Dish) => void
  clearBasket: () => void
}

export const useBasketStore = create<BasketStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => {
      const indexToRemove = state.items.findIndex((i) => i._id === item._id)

      let newBasket = [...state.items]

      if (indexToRemove >= 0) {
        newBasket.splice(indexToRemove, 1)
      }
      return {
        items: newBasket,
      }
    }),
  clearBasket: () => set({ items: [] }),
}))
