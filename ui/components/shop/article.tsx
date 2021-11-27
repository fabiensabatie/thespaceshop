interface Props {
 title: string;
 info?: string;
 description?: string;
 image?: string;
}

const ShopArticle = ({ title, info, description, image } : Props) => {
  return (<div class="w-full h-full bg-black overflow-hidden shadow-lg rounded-3xl flex-col flex justify-between cursor-pointer border-solid border-4 border-black">
    <div class="h-3/5 text-white overflow-hidden relative">
      <img src={image} alt={title} class="h-full w-full top-0 left-0 absolute object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out filter hue-rotate-0 hover:hue-rotate-90"/>
    </div>
    <div class="h-2/5 bg-white flex flex-col p-4 border-t-4 border-solid border-black">
      <div class="flex flex-row justify-between">
        <span class="font-semibold text-base ">{info}</span>
        <span class="font-bold text-xl text-black text-right">{title}</span>
      </div>
      <span class="font-bold text-base text-gray-700 ">{description}</span>
    </div>
  </div>);
};

export default ShopArticle;
