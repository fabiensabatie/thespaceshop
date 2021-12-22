import create from "zustand"
import { ShopArticle } from "../../../domain/core/article"
import { ShopStore } from "../port/shop.store.port"

export const shopStore = create<ShopStore>((set, get) => ({
  articles: [],
  selectedArticle: null,
  cart: [],
  selectedShopCategory: 'featured',
  setArticles: articles => set({ articles }),
  getArticles: async () => {
    return [];
  },
  setSelectedShopCategory: category => set({ selectedShopCategory: category }),
  setSelectedArticle: article => set({ selectedArticle: article }),
  addToCart: article => set(state =>  ({  ...state, cart : [...state.cart, article] })),
  emptyCart: () => set(state =>  ({  cart : [] })),
  removeCartItem: article => {
    set(state => {
      const toRemove = state.cart.findIndex((item:ShopArticle) => article.name === item.name);
      return ({  ...state, cart : state.cart.filter((item, i) => i !== toRemove) })
    })
  },
}))
