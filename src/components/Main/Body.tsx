import React, { Suspense, lazy } from "react";
import Login from "../Login/Login";
import Browse from "../LandingPage/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { gptSelector } from "../../redux/GPTSlice";
// import languages from "../utils/intl/languages";
import ENGLISH from "../../utils/intl/languages/en.json";
import HINDI from "../../utils/intl/languages/hi.json";
import FRENCH from "../../utils/intl/languages/fr.json";
import Search from "../Search/Search";
import Loading from "../Common/Loading";
import ErrorBoundary from "../Common/ErrorBoundary";
// Lazy loading
const Play = lazy(() => import("../Features/Play"));
const Details = lazy(() => import("../Features/Details"));
const WatchList = lazy(() => import("../Features/WatchList"));

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
    {
      path: "/play/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <Play />
        </Suspense>
      ),
    },
    {
      path: "/details/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <Details />
        </Suspense>
      ),
    },
    {
      path: "/watchlist",
      element: (
        <Suspense fallback={<Loading />}>
          <WatchList />
        </Suspense>
      ),
    },
  ]);

  const { locale } = useSelector(gptSelector);
  const messages = locale === "en" ? ENGLISH : locale === "hi" ? HINDI : FRENCH;
  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages}>
      <ErrorBoundary>
        <RouterProvider router={appRouter} />
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default Body;
