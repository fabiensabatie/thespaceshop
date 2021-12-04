import create from "solid-zustand"
import { ShopStore } from "../port/shop.store.port"

export const shopStore = create<ShopStore>(set => ({
  articles: [],
  selectedArticle: null,
  setArticles: articles => set({ articles }),
  setSelectedArticle: article => set({ selectedArticle: article }),
}))
