import { ShopArticle } from "../../app/shop/domain/core/article";
import ShopArticleSlider from "../../components/shop/slider";
import WatchesArticle from "../../assets/images/shop/watches.jpg";
import JeweleryArticle from "../../assets/images/shop/jewelery.jpg";
import CapArticle from "../../assets/images/shop/cap.jpg";
import { shopStore } from "../../app/shop/store/domain/core/shop.store";
import { useRouter } from "next/router";


const ShopAccessories = () => {
  const { setSelectedArticle } = shopStore();
  const router = useRouter();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    router.push("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Watches", price: 15.8, image: WatchesArticle.src }),
    new ShopArticle({name: "Jewelery", price: 15.8, image: JeweleryArticle.src }),
    new ShopArticle({name: "Caps", price: 15.8, image: CapArticle.src }),
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Accessories"} onClick={openArticle}/>
  );
};

export default ShopAccessories;
