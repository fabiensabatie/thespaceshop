import MenuComponent from "../components/menu.component";
import PageTitle from "../components/page-title";

const OrdersPages = () => {
  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="orders" />
      <PageTitle content="Your orders"></PageTitle>
    </div>
  );
};

export default OrdersPages;
