import { create } from 'zustand'
import { Dish } from '../sanity/types/schema'

type BasketStore = {
  items: Dish[]
  addItem: (item: Dish) => void
  removeItem: (item: Dish) => void
  clearBasket: () => void
  getTotal: () => number
}

export const useBasketStore = create<BasketStore>((set, get) => ({
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
  getTotal: () =>
    get().items.reduce((total, item) => (total += item.price || 0), 0),
}))
