import ShopArticleComponent from "../../components/shop/article";
import { ShopArticle } from "../../app/shop/domain/core/article";
import Next from "../../assets/images/next.png";
import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  articles: ShopArticle[];
  category: string;
  onClick: (article: ShopArticle) => void;
}

const ShopArticleSlider = ({ articles, category, onClick } : Props) => {

  const [list, setList] = useState<Element | null>(null);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const next = () => {
    if (list) {
      list.scroll({ top: list.scrollTop + list.clientHeight, behavior: 'smooth' });
      // setCurrentPage(Math.ceil(list.scrollTop / list.clientHeight));
    }
  }

  const prev = () => {
    if (list) {
      list.scroll({ top: list.scrollTop - list.clientHeight, behavior: 'smooth' });
      // setCurrentPage(Math.ceil(list.scrollTop / list.clientHeight));
    }
  }

  useLayoutEffect(() => {
    const list = document.querySelector("#list");
    if (list) {
      setList(list);
      setPages(Math.ceil(list.scrollHeight / list.clientHeight));
    }
  })



  return (
    <div className={"w-full h-full flex flex-col box-border"}>
      <div className="w-full flex justify-between">
        <div className="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">{category}</div>
        <div className="font-bold uppercase text-2xl p-4  flex flex-row mr-16 w-min whitespace-nowrap -ml-10 text-black">
          <img src={Next.src} className="transform rotate-180 cursor-pointer opacity-60 hover:opacity-100" onClick={prev} />
          <span className="mx-10 transform -skew-x-6 ">{`Page ${currentPage}/${pages}`}</span>
          <img src={Next.src} className="cursor-pointer opacity-60 hover:opacity-100" onClick={next}/>
        </div>
       </div>
      <div className="w-full flex flex-wrap flex-row mt-8 data-keen-slider-scrollable overflow-x-scroll" id="list">
        {articles.map(article => <div id="article" className="p-4 h-full lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-full" key={article.name + Math.random()} onClick={() => onClick(article)}>
          <ShopArticleComponent name={article.name} image={article.image} />
        </div>)}
      </div>
    </div>
    
  );
};

export default ShopArticleSlider;
