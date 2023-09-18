import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { gptSelector } from "../utils/redux/GPTSlice";
// import languages from "../utils/intl/languages";
import ENGLISH from "../utils/intl/languages/en.json";
import HINDI from "../utils/intl/languages/hi.json";
import FRENCH from "../utils/intl/languages/fr.json";
import Search from "./Search";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  const { locale } = useSelector(gptSelector);
  const messages = locale === "en" ? ENGLISH : locale === "hi" ? HINDI : FRENCH;
  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages}>
      <RouterProvider router={appRouter} />
    </IntlProvider>
  );
};

export default Body;
