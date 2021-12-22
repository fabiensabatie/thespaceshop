import Astronaut from "../../assets/images/astronaut.jpg";

const Interviews = () => {
  return (
    <div className="w-4/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
      <span className="z-10 relative">Interviews</span>
      <img src={Astronaut.src} className="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </div>
  );
};

export default Interviews;
