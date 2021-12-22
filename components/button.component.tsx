
interface Props {
  black?: boolean;
  skew?: boolean;
  children: string;
  onClick ?: () => void;
}

const Button = ({ black, children, skew, onClick } : Props) => {
  const style = `${black ? "bg-black text-white hover:bg-gray-200 hover:text-black" : "bg-white text-black hover:bg-gray-200" }`;
  const skewed = `${skew ? "transform -skew-x-6 " : "" }`;
  return (
    <div className={`p-5 ${skewed} cursor-pointer ${style}`} onClick={onClick}>
      <span className="text-base transform font-bold uppercase skew-x-6">{children}</span>
    </div>
  );
};

export default Button;
