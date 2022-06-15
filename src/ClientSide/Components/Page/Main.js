import About from "./About/About";
import Home from "./Home/Home";
import News from "./News/News";
import Offers from "./Offers/Offers";

export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/about",
    page: <About />,
  },
  {
    path: "/offers",
    page: <Offers />,
  },
  {
    path: "/news",
    page: <News />,
  },
];
