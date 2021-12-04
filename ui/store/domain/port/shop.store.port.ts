import { ShopArticle } from "../../../../app/shop/domain/core/article";

export interface ShopStore {
  articles: ShopArticle[];
  selectedArticle: ShopArticle | null;
  setArticles: (articles: ShopArticle[]) => void;
  setSelectedArticle: (article: ShopArticle) => void;
}