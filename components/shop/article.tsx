interface Props {
 name: string;
 info?: string;
 description?: string;
 image?: string;
}

const ShopArticle = ({ name, info, description, image } : Props) => {
  return (<div className="w-full h-full bg-black overflow-hidden shadow-lg rounded-3xl flex-col flex justify-between cursor-pointer border-solid border-4 border-black">
    <div className="h-3/5 text-white overflow-hidden relative">
      <img src={image} alt={name} className="h-full w-full top-0 left-0 absolute object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out  filter"/>
    </div>
    <div className="h-2/5 bg-white flex flex-col p-4 border-t-4 border-solid border-black">
      <div className="flex flex-row justify-between">
        <span className="font-semibold text-base ">{info}</span>
        <span className="font-bold text-xl text-black text-right">{name}</span>
      </div>
      <span className="font-bold text-base text-gray-700 ">{description}</span>
    </div>
  </div>);
};

export default ShopArticle;
