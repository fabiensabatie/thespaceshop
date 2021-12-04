import type { Component } from "solid-js";
import Cart from "./assets/images/shopping-cart.png";
import Heart from "./assets/images/heart.png";
import Box from "./assets/images/box.png";
import Search from "./assets/images/search.png";
import Starship from "./assets/images/starship.gif";
import Mask from "./assets/images/mask.jpg";
import Perseverence from "./assets/images/perseverence.jpg";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/home/home";
import OurMissionPage from "./pages/about-us";
import ShopPage from "./pages/shop/shop";
import SupportPage from "./pages/support";
import OrdersPages from "./pages/orders";
import FavoritesPage from "./pages/favorites";
import CartPage from "./pages/cart";
import StoriesPage from "./pages/stories";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ArticlePage from "./pages/shop/article";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about-us" element={<OurMissionPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/orders" element={<OrdersPages />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop/article" element={<ArticlePage />} />
    </Routes>
  );
};

.4
export default App;
