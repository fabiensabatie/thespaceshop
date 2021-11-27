import type { Component } from "solid-js";
import MenuComponent from "../components/menu.component";
import Send from "../assets/images/send.png";
import PageTitle from "../components/page-title";
import Button from "../components/button.component";

const SupportPage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="support" />
      {/* <PageTitle content="Support"></PageTitle> */}
      <div class="flex justify-center items-center flex-col box-border">
        <h2 class="my-4">Send us an email</h2>
        <div class="bg-gray-100 rounded-xl p-6 w-full box-border" style={{"max-width": "700px"}}>
          <input class="text-base font-extralight bg-white border-none rounded-lg w-full p-6" placeholder="Your name"/>
          <textarea class="text-base font-extralight bg-white border-none rounded-lg w-full p-6 mt-6" placeholder="Let us know how we can help you ❤" style={{"min-height": "300px"}}></textarea>
          <div class="w-full my-2 flex justify-end mt-4">
            <Button black>Send your message</Button>
          </div>
        </div>
      </div>
      <div class="p-5 w-full"></div>
    </div>
  );
};

export default SupportPage;
