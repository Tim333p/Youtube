import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/pages/Home";
import Shorts from "./components/pages/Shorts";
import Subscriptions from "./components/pages/Subscriptions";
import Mine from "./components/pages/Mine";
import YourChannel from "./components/pages/YourChannel";
import History from "./components/pages/History";
import Lists from "./components/pages/Lists";
import YourVideos from "./components/pages/YourVideos";
import WhatchLater from "./components/pages/WhatchLater";
import FavoriteVideos from "./components/pages/FavoriteVideos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="shorts" element={<Shorts />} />
      <Route path="subscriptions" element={<Subscriptions />} />
      <Route path="mine" element={<Mine />} />
      <Route path="yourchannel" element={<YourChannel />} />
      <Route path="history" element={<History />} />
      <Route path="lists" element={<Lists />} />
      <Route path="yourvideos" element={<YourVideos />} />
      <Route path="whatchlater" element={<WhatchLater />} />
      <Route path="favoritevideos" element={<FavoriteVideos />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
