import { useNavigate } from "solid-app-router";
import MenuComponent from "../../components/menu.component";
import PageTitle from "../../components/page-title";
import { shopStore } from "../../store/domain/core/shop.store";
import Next from "../../assets/images/next_large.png";
import Thumb1 from "../../assets/images/shop/thumb1.jpg";
import Thumb2 from "../../assets/images/shop/thumb2.jpg";
import Thumb3 from "../../assets/images/shop/thumb3.jpg";
import Button from "../../components/button.component";

const ArticlePage = () => {
  const { selectedArticle } = shopStore();
  const navigate = useNavigate();
  if (!selectedArticle) navigate("/shop");

  const goBack = () => {
    navigate("/shop");
  }

  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="shop" />
      {/* <PageTitle content={selectedArticle!.name}></PageTitle> */}
      <div class={"flex xl:h-full xl:flex-row flex-col box-border p-8"}>
        <img src={Next} class="cursor-pointer ml-6 opacity-60 hover:opacity-100 w-16 h-16 transform rotate-180" onClick={goBack}/>
        <div class="w-full h-full flex xl:flex-row  flex-col justify-center gap-10 p-6">
          <div class="xl:w-1/2 w-full p-8 box-border h-full flex flex-col items-center justify-center">
            <div style={{"max-height": "450px"}}>
              <img src={selectedArticle!.image} class="m-auto h-full rounded-3xl border-4 border-gray-200 border-solid" />
            </div>
            <div class="w-full h-1/3 flex flex-row">
              <div class="m-6 w-1/3 flex items-center">
                <img src={Thumb3} class="m-auto rounded-3xl border-4 border-gray-200 border-solid -mt-28" />
              </div>
              <div class="m-6 w-1/3 flex items-center">
                <img src={Thumb1} class="m-auto rounded-3xl border-4 border-gray-200 border-solid -mt-24" />
              </div>
              <div class="m-6 w-1/3 flex items-center">
                <img src={Thumb2} class="m-auto rounded-3xl border-4 border-gray-200 border-solid -mt-20" />
              </div>
            </div>
          </div>
          <div class="xl:w-1/2 w-full h-full p-8">
            <div class="text-xl box-border relative text-white w-full h-full flex flex-col justify-between">
              <div class="label bg-black p-2 px-4 text-5xl uppercase transform -skew-x-3 font-bold inline-block -mt-10" style={{width: "fit-content"}}>{selectedArticle!.name}</div>
              <div class="w-full m-auto p-4 flex flex-row items-center justify-between">
                <div class="w-1/3 flex flex-row items-center mt-5">
                  <div class="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-400"></div>
                  <div class="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-500"></div>
                  <div class="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-600"></div>
                  <div class="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-700"></div>
                  <div class="w-6 h-6 rounded-full border-2 border-gray-100 cursor-pointer m-2 filter drop-shadow-md border-solid bg-gray-800"></div>
                </div>
                <select class="p-4 pr-8 text-black text-center font-bold border-2 border-solid border-gray-300 rounded-2xl">
                  <option>XXS</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                </select>
                <div class="w-1/3 text-6xl text-black  whitespace-nowrap text-right price">{(Math.random() * 30).toFixed(2)} $</div>
              </div>
              <div class="w-11/12 m-auto p-8 text-black bg-gray-100 transform -skew-x-3 text-justify relative description">
                <div class="transform description skew-x-3">  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla felis, luctus tristique finibus eu, ullamcorper hendrerit ex. In posuere eget lorem dignissim tincidunt.
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Quisque dapibus, tortor nec pharetra laoreet, metus purus vulputate ipsum, sit amet convallis lorem quam a augue. Maecenas a lectus hendrerit, maximus nibh at, fermentum arcu.
                </div>
              </div>
              <div class="w-full my-2 flex justify-end mt-4 transform -skew-x-3 ">
                <Button>Add to favorites</Button>
                <Button black>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
