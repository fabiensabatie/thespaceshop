import { ShopStore } from "../../../ui/store/domain/port/shop.store.port";
import { ShopArticle } from "../domain/core/article";
import { UseCase } from "../shared/use-case";

interface RemoveFromCartProps {
  (article: ShopArticle): void;
}

export type RemoveFromCartUseCase = UseCase<ShopStore, RemoveFromCartProps>;

export const RemoveFromCart:RemoveFromCartUseCase = (set, get) => 
  article => set(state => {
    console.log("article", article, state.cart.findIndex((item:ShopArticle) => article.name === item.name))
    return ({  ...state, cart : state.cart.slice(state.cart.findIndex((item:ShopArticle) => article.name === item.name), 1) })
  })
