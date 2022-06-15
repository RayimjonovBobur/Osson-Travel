import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import News from "./News/News";
import Offers from "./Offers/Offers";

export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/offers",
    page: <Offers />,
  },
  {
    path: "/news",
    page: <News />,
  },
  {
    path: "/contact",
    page: <Contact />
  }
];
