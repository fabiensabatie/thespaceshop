import type { Component } from "solid-js";
import MenuComponent from "../../components/menu.component";
import Astrophotography from "./astrophotography";
import Stories from "./stories";
import UpcomingEvents from "./upcoming";
import Store from "./store";
import Accessories from "./accessories";
import Interviews from "./interviews";

const HomePage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <MenuComponent page="home" />
      <div class="w-full h-full  flex flex-col box-border gap-6 p-8 pt-0">
        <div class={"w-full h-1/2 flex flex-row gap-6 box-border"}>
          <Stories />
          <div class="w-4/12 h-full box-border rounded-xl flex flex-col gap-6">
            <Astrophotography />
            <UpcomingEvents />                                     
          </div>
        </div>
        <div class={"w-full h-1/2 flex flex-row gap-6 box-border"}>
          <Store />
          <Accessories />
          <Interviews />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
