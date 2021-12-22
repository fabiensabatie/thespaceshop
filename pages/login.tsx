import Button from "../components/button.component";
import MenuComponent from "../components/menu.component";

const LoginPage = () => {
  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent />
      {/* <PageTitle content="Support"></PageTitle> */}
      <div className="flex justify-center items-center flex-col box-border">
        <h2 className="my-4">Login</h2>
        <div className="bg-gray-100 rounded-xl p-6 w-full box-border" style={{"maxWidth": "500px"}}>
          <div className="label font-bold uppercase text-xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">email</div>
          <input className="my-6 text-base font-extralight bg-white border-none rounded-lg w-full p-4" placeholder="email@thespaceshop.com" name="email"/>
          <div className="label font-bold uppercase text-xl bg-black p-4 transform -skew-x-6 w-min -ml-10 text-white">password</div>
          <input className="my-6 text-base font-extralight bg-white border-none rounded-lg w-full p-4" name="password" type="password" placeholder="**************"/>
          <div className="w-full my-2 flex justify-end mt-4 transform -skew-x-3">
            <Button>Forgotten password</Button>
            <Button black>Login</Button>
          </div>
        </div>
      </div>
      <div className="p-5 w-full"></div>
    </div>
  );
};

export default LoginPage;
