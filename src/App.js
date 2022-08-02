import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./ClientSide/Components/Header/Header";
import { Main } from "./ClientSide/Components/Page/Main";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useDispatch } from "react-redux";
import { setChallage } from "./Redux/stored_reducer";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "en", "ru"],
    fallbackLng: "",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: `/locales/{{lng}}/translation.json`,
    },
    react: { useSuspense: false },
  });

function App() {
  const dispatch = useDispatch();
  const challage = i18n.language;
  const { t } = useTranslation();
  dispatch(setChallage(challage));

  return (
    <div className="App">
      <Header />
      <Routes>
        {Main.map((page) => (
          <Route path={page?.path} element={page?.page} />
        ))}
      </Routes>
    </div>
  );
} 

export default App;
