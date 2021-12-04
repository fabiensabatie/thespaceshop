import ShopArticleComponent from "../../components/shop/article";
import "solid-slider/dist/slider.css";
import createSlider from "solid-slider";
import { ShopArticle } from "../../../app/shop/domain/core/article";
import Next from "../../assets/images/next.png";

interface Props {
  articles: ShopArticle[];
  category: string;
  onClick: (article: ShopArticle) => void;
}

const ShopArticleSlider = ({ articles, category, onClick } : Props) => {
  const options = { vertical: true };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);
  const pages = Math.ceil(articles.length / 5);

  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <div class="w-full flex justify-between">
        <div class="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">{category}</div>
        <div class="font-bold uppercase text-2xl p-4  flex flex-row mr-16 w-min whitespace-nowrap -ml-10 text-black">
          <img src={Next} class="transform rotate-180 cursor-pointer opacity-60 hover:opacity-100" onClick={prev}/>
          <span class="mx-10 transform -skew-x-6 ">{`Page ${current() + 1}`}</span>
          <img src={Next} class="cursor-pointer opacity-60 hover:opacity-100" onClick={next}/>
        </div>
       </div>
      <div class="w-full h-full flex flex-wrap flex-row mt-8 data-keen-slider-scrollable overflow-x-scroll" data-keen-slider-scrollable  use:slider>
        {articles.map(article => <div class="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-full" onClick={() => onClick(article)}>
          <ShopArticleComponent name={article.name} image={article.image} />
        </div>)}
      </div>
    </div>
    
  );
};

export default ShopArticleSlider;
