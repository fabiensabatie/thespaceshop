import type { Component } from "solid-js";
import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

const CartPage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="cart" />
      <PageTitle content="Cart"></PageTitle>
    </div>
  );
};

export default CartPage;
