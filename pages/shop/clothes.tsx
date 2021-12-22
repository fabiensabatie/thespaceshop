import ShirtArticle from "../../assets/images/shop/shirt.jpg";
import JeanArticle from "../../assets/images/shop/jeans.jpg";
import HoodieArticle from "../../assets/images/shop/hoodie.jpg";
import ShoeArticle from "../../assets/images/shop/shoes.jpg";
import ShopArticleSlider from "../../components/shop/slider";
import { ShopArticle } from "../../app/shop/domain/core/article";
import { shopStore } from "../../app/shop/store/domain/core/shop.store";
import { useRouter } from "next/router";

const ShopClothes = () => {
  const { setSelectedArticle } = shopStore();
  const router = useRouter();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    router.push("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Shirts", image: ShirtArticle.src, price: 18.2 }),
    new ShopArticle({name: "Jeans", image: JeanArticle.src, price: 18.2 }),
    new ShopArticle({name: "Hoodies", image: HoodieArticle.src, price: 18.2 }),
    new ShopArticle({name: "Shoes", image: ShoeArticle.src, price: 18.2 }),
    new ShopArticle({name: "Jeans", image: JeanArticle.src, price: 18.2 }),
    new ShopArticle({name: "Hoodies", image: HoodieArticle.src, price: 18.2 }),
    new ShopArticle({name: "Shirts", image: ShirtArticle.src, price: 18.2 }),
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Clothes"} onClick={openArticle}/>
  );
};

export default ShopClothes;
