import Universe from "../../assets/images/universe.jpeg";

const Astrophotography = () => {
  return (
    <div className="w-full h-full bg-black p-4 box-border relative rounded-xl overflow-hidden cursor-pointer">
      <span className="text-white font-bold text-xl relative z-10">Astrophotography</span>
      {/* <p class="text-white text-base font-extralight relative z-10">Buy physical, digital or NFT astropictures</p> */}
      <img src={Universe.src} className="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </div>
    );
};

export default Astrophotography;
