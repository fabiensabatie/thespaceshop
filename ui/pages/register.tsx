import type { Component } from "solid-js";
import Button from "../components/button.component";
import MenuComponent from "../components/menu.component";

const RegisterPage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent />
      <div class="flex justify-center items-center flex-col box-border">
        <h2 class="my-4">Register</h2>
        <div class="bg-gray-100 rounded-xl p-6 w-full box-border" style={{"max-width": "500px"}}>
          <div class="label font-bold uppercase text-xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">email</div>
          <input class="my-6 text-base font-extralight bg-white border-none rounded-lg w-full p-4" placeholder="email@thespaceshop.com" name="email"/>
          <div class="label font-bold uppercase text-xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">password</div>
          <input class="my-6 text-base font-extralight bg-white border-none rounded-lg w-full p-4" name="password" type="password" placeholder="**************"/>
          <div class="label font-bold uppercase text-xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">password confirmation</div>
          <input class="my-6 text-base font-extralight bg-white border-none rounded-lg w-full p-4" name="password" type="password" placeholder="**************"/>
          <div class="w-full my-2 flex justify-end mt-4">
            <Button black>Register</Button>
          </div>
        </div>
      </div>
      <div class="p-5 w-full"></div>
    </div>
  );
};

export default RegisterPage;
