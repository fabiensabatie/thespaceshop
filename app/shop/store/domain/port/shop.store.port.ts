import { ShopArticle } from "../../../domain/core/article";
import { ShopCategory } from "../../../domain/core/shop-category";

export interface ShopStore {
  articles: ShopArticle[];
  selectedArticle: ShopArticle | null;
  cart: ShopArticle[];
  selectedShopCategory: ShopCategory;
  setArticles: (articles: ShopArticle[]) => void;
  setSelectedShopCategory: (category: ShopCategory) => void;
  getArticles: () => Promise<ShopArticle[]>;
  setSelectedArticle: (article: ShopArticle) => void;
  addToCart: (article: ShopArticle) => void;
  emptyCart: () => void;
  removeCartItem: (article: ShopArticle) => void;
}