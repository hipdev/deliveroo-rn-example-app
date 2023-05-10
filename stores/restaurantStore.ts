import { create } from 'zustand'
import { Restaurant } from '../sanity/types/schema'
import { RestaurantCardProps } from '../components/RestaurantCard'

// Selected Restaurant Store

type RestaurantStore = {
  restaurant: RestaurantCardProps
  setRestaurant: (restaurant: RestaurantCardProps) => void
}

export const useRestaurantStore = create<RestaurantStore>((set, get) => ({
  restaurant: {} as RestaurantCardProps,
  setRestaurant: (restaurant) => set({ restaurant }),
}))
