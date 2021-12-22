import { useEffect, useState } from "react";
import { ShopArticle } from "../app/shop/domain/core/article";
import { shopStore } from "../app/shop/store/domain/core/shop.store";
import Button from "../components/button.component";
import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

interface ArticleCount {
  article: ShopArticle;
  count: number;
}

const CartPage = () => {
  const shop = shopStore();
  const { cart } = shop;
  const [articles, setArticles] = useState([] as ArticleCount[]);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setArticles(cart.reduce((articles, article) => {
      const articleSet = articles.find(a => a.article.name === article.name);
      if (!articleSet) {
        articles.push({ article, count: 1 });
      } else articleSet.count++;
      return articles;
    }, [] as ArticleCount[]));
    setPrice(cart.reduce((acc, article) => acc + (article.price ?? 0), 0 as number))
  }, [cart]);
  

  const emptyCart = () => {
    shop.emptyCart();
  }

  const removeCartItem = (article: ShopArticle) => {
    shop.removeCartItem(article);
  }

  const addToCart = (article: ShopArticle) => {
    if (article) shop.addToCart(article);
  }

  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="cart" />
      <PageTitle content="Cart"></PageTitle>
      { articles.length === 0 && <div className="w-full price text-5xl text-center mt-20">Your cart is empty</div>}
      <div className="w-10/12 m-auto flex flex-col">
        {articles.map(({article, count}) => {
          return <div className="flex flex-row w-full gap-6 justify-between items-center my-5">
            <div className="transform -skew-x-6 overflow-hidden">
              <img style={{"maxHeight": "250px", "maxWidth": "250px"}} src={article.image} className="w-full h-full transform skew-x-6" />
            </div>
            <div className="w-1/4 flex justify-center">
              <div className="label bg-black p-2 px-4 text-4xl uppercase transform -skew-x-3 font-bold text-white inline-block m-auto" style={{width: "fit-content", height: "fit-content"}}>{article.name}</div>
            </div>
            <div className="w-6/12 m-auto p-8 text-black bg-gray-100 transform -skew-x-3 text-justify relative description">
                <div className="transform description skew-x-3">  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla felis, luctus tristique finibus eu, ullamcorper hendrerit ex. In posuere eget lorem dignissim tincidunt.
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                </div>
              </div>
            <div className="flex flex-col w-2/12">
              <div className="text-5xl text-black text-right whitespace-nowrap price">{ article.price?.toFixed(2) } $</div>
              <div className="flex flex-row w-full justify-end items-center">
                <div className="text-4xl font-bold text-gray-500 cursor-pointer whitespace-nowrap price" onClick={() => removeCartItem(article)}>-</div>
                <div className="text-2xl font-bold whitespace-nowrap price mx-5">{ count }</div>
                <div className="text-4xl font-bold text-gray-500 cursor-pointer whitespace-nowrap price" onClick={() => addToCart(article)}>+</div>
              </div>
            </div>
          </div>;
        })}
        <div className="w-full flex flex-row justify-end mt-10 -mr-20">
          <div className="label bg-black p-2 px-4 text-4xl uppercase transform -skew-x-3 font-bold text-white inline-block mr-8" style={{width: "fit-content", height: "fit-content"}}>Total :</div>
          <div className="text-6xl text-black  whitespace-nowrap price">{ price.toFixed(2) } $</div>
        </div>
        <div className="w-full pt-10 pb-20 flex justify-end">
          <Button skew onClick={emptyCart}>Empty cart</Button>
          <Button skew black>Make it mine !</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
