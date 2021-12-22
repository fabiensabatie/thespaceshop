import MenuComponent from "../components/menu.component";
import Astrophotography from "./home/astrophotography";
import Stories from "./home/stories";
import UpcomingEvents from "./home/upcoming";
import Store from "./home/store";
import Accessories from "./home/accessories";
import Interviews from "./home/interviews";

const HomePage = () => {
  return (
    <div className={"w-full h-full flex flex-col box-border"}>
      <MenuComponent page="home" />
      <div className="w-full h-full  flex flex-col box-border gap-6 p-8 pt-0">
        <div className={"w-full h-1/2 flex flex-row gap-6 box-border"}>
          <Stories />
          <div className="w-4/12 h-full box-border rounded-xl flex flex-col gap-6">
            <Astrophotography />
            <UpcomingEvents />                                     
          </div>
        </div>
        <div className={"w-full h-1/2 flex flex-row gap-6 box-border"}>
          <Store />
          <Accessories />
          <Interviews />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
