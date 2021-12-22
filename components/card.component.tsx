
interface Props {
  black?: boolean;
  skew?: boolean;
  background: Element;
}

const Card = ({ black, children, skew } : Props) => {
  const style = `${black ? "bg-black text-white hover:bg-gray-200" : "bg-white text-black hover:bg-gray-200" }`;
  const skewed = `${skew ? "transform -skew-x-6 " : "" }`;
  return (
    <div class="w-full h-full bg-black p-4 box-border relative rounded-xl overflow-hidden cursor-pointer">
      <div class="text-white font-bold text-xl relative z-10 w-full flex justify-end">Astrophotography</div>
      {/* <p class="text-white text-base font-extralight relative z-10">Buy physical, digital or NFT astropictures</p> */}
      <img src={Universe} class="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </div>
  );
};

export default Card;
