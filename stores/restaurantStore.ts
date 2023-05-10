import { create } from 'zustand'
import { Restaurant } from '../sanity/types/schema'
import { RestaurantFixed } from '../components/RestaurantCard'

// Selected Restaurant Store

type RestaurantStore = {
  restaurant: RestaurantFixed
  setRestaurant: (restaurant: RestaurantFixed) => void
}

export const useRestaurantStore = create<RestaurantStore>((set, get) => ({
  restaurant: {} as RestaurantFixed,
  setRestaurant: (restaurant) => set({ restaurant }),
}))
