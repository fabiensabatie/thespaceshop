import { ShopStore } from "../../../ui/store/domain/port/shop.store.port";
import { ShopArticle } from "../domain/core/article";
import { UseCase } from "../shared/use-case";

interface AddToCartProps {
  (article: ShopArticle): void;
}

export type AddToCartUseCase = UseCase<ShopStore, AddToCartProps>;

export const AddToCart:AddToCartUseCase = (set, get) => 
  article => {
    set(state =>  ({  ...state, cart : [...state.cart, article] }))
  }
