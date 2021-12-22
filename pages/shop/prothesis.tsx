import { ShopArticle } from "../../app/shop/domain/core/article";
import ShopArticleSlider from "../../components/shop/slider";
import LegArticle from "../../assets/images/shop/leg.jpg";
import ArmArticle from "../../assets/images/shop/arm.jpg";
import { shopStore } from "../../app/shop/store/domain/core/shop.store";
import Router, { useRouter } from "next/router";

const ShopProthesis = () => {
  const { setSelectedArticle } = shopStore();
  const router = useRouter();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    router.push("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Legs", price: 1200, image: LegArticle.src }),
    new ShopArticle({name: "Arms", price: 1153, image: ArmArticle.src })
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Prothesis"} onClick={openArticle}/>
  );
};

export default ShopProthesis;
