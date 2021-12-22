import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

const StoriesPage = () => {
  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent />
      <PageTitle content="Stories"></PageTitle>
    </div>
  );
};

export default StoriesPage;
