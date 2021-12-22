import MenuComponent from "../components/menu.component";
import Button from "../components/button.component";

const SupportPage = () => {
  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="support" />
      {/* <PageTitle content="Support"></PageTitle> */}
      <div className="flex justify-center items-center flex-col box-border">
        <h2 className="my-4">Send us an email</h2>
        <div className="bg-gray-100 rounded-xl p-6 w-full box-border" style={{"maxWidth": "700px"}}>
          <input className="text-base font-extralight bg-white border-none rounded-lg w-full p-6" placeholder="Your name"/>
          <textarea className="text-base font-extralight bg-white border-none rounded-lg w-full p-6 mt-6" placeholder="Let us know how we can help you ❤" style={{"minHeight": "300px"}}></textarea>
          <div className="w-full my-2 flex justify-end mt-4">
            <Button black>Send your message</Button>
          </div>
        </div>
      </div>
      <div className="p-5 w-full"></div>
    </div>
  );
};

export default SupportPage;
