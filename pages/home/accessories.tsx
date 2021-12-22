// import AccessoriesVideo from "../../assets/images/accessories.mp4";

const Accessories = () => {
  return (
    <div className="w-2/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
      <span className="z-10 relative">Accessories</span>
      <video className="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out" autoPlay muted controls={false} loop/>
    </div>
  );
};

export default Accessories;
