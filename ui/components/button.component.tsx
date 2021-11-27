
interface Props {
  black?: boolean;
  skew?: boolean;
  children: string;
}

const Button = ({ black, children, skew } : Props) => {
  const style = `${black ? "bg-black text-white hover:bg-gray-200" : "bg-white text-black hover:bg-gray-200" }`;
  const skewed = `${skew ? "transform -skew-x-6 " : "" }`;
  return (
    <div class={`p-5 ${skewed} cursor-pointer ${style}`}>
      <span class="text-base transform font-bold uppercase skew-x-6">{children}</span>
    </div>
  );
};

export default Button;
