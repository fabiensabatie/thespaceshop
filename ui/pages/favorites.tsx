import type { Component } from "solid-js";
import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

const FavoritesPage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="favorites" />
      <PageTitle content="Favorites"></PageTitle>
    </div>
  );
};

export default FavoritesPage;
