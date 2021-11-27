import type { Component } from "solid-js";
import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

const OurMissionPage: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="about-us" />
      <PageTitle content="About us"></PageTitle>
    </div>
  );
};

export default OurMissionPage;
