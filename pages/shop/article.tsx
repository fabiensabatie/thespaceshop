import MenuComponent from "../../components/menu.component";
import PageTitle from "../../components/page-title";
import { shopStore } from "../../app/shop/store/domain/core/shop.store";
import Next from "../../assets/images/next_large.png";
import Thumb1 from "../../assets/images/shop/thumb1.jpg";
import Thumb2 from "../../assets/images/shop/thumb2.jpg";
import Thumb3 from "../../assets/images/shop/thumb3.jpg";
import Button from "../../components/button.component";
import { useRouter } from "next/router";

const ArticlePage = () => {
  const shop = shopStore();
  const { selectedArticle } = shop;
  const router = useRouter();
  if (!selectedArticle) router.push("/shop");

  const goBack = () => {
    router.push("/shop");
  }

  const addToCart = () => {
    console.log(selectedArticle)
    if (selectedArticle) shop.addToCart(selectedArticle);
  }

  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="shop" />
      {/* <PageTitle content={selectedArticle!.name}></PageTitle> */}
      <div className={"flex xl:h-full xl:flex-row flex-col box-border p-8"}>
        <img src={Next.src} className="cursor-pointer ml-6 opacity-60 hover:opacity-100 w-16 h-16 transform rotate-180" onClick={goBack}/>
        <div className="w-full h-full flex xl:flex-row  flex-col justify-center gap-10 p-6">
          <div className="xl:w-1/2 w-full p-8 box-border h-full flex flex-col items-center justify-center">
            <div style={{"maxHeight": "450px"}}>
              <img src={selectedArticle!.image} className="m-auto h-full rounded-3xl border-4 border-gray-200 border-solid" />
            </div>
            <div className="w-full h-1/3 flex flex-row">
              <div className="m-6 w-1/3 flex items-center">
                <img src={Thumb3.src} className="m-auto rounded-3xl border-4 border-gray-200 border-solid cursor-pointer -mt-28" />
              </div>
              <div className="m-6 w-1/3 flex items-center">
                <img src={Thumb1.src} className="m-auto rounded-3xl border-4 border-gray-200 border-solid cursor-pointer -mt-24" />
              </div>
              <div className="m-6 w-1/3 flex items-center">
                <img src={Thumb2.src} className="m-auto rounded-3xl border-4 border-gray-200 border-solid cursor-pointer -mt-20" />
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 w-full h-full p-8">
            <div className="text-xl box-border relative text-white w-full h-full flex flex-col justify-between">
              <div className="label bg-black p-2 px-4 text-5xl uppercase transform -skew-x-3 font-bold inline-block -mt-10" style={{width: "fit-content"}}>{selectedArticle!.name}</div>
              <div className="w-full m-auto p-4 flex flex-row items-center justify-between">
                <div className="w-1/3 flex flex-row items-center mt-5">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-400"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-500"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-600"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-700"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-800"></div>
                </div>
                <select className="p-4 pr-8 text-black text-center font-bold border-2 border-solid border-gray-300 rounded-2xl">
                  <option>XXS</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                </select>
                <div className="w-1/3 text-6xl text-black  whitespace-nowrap text-right price">{selectedArticle?.price?.toFixed(2)} $</div>
              </div>
              <div className="w-11/12 m-auto p-8 text-black bg-gray-100 transform -skew-x-3 text-justify relative description">
                <div className="transform description skew-x-3">  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla felis, luctus tristique finibus eu, ullamcorper hendrerit ex. In posuere eget lorem dignissim tincidunt.
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                </div>
              </div>
              <div className="w-full my-2 flex justify-end mt-4 transform -skew-x-3 ">
                <Button>Add to favorites</Button>
                <Button black onClick={addToCart}>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
