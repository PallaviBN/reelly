import { SyntheticEvent, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/static/firebase";
import { addUser, removeUser, userSelector } from "../../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isNullorEmpty } from "../../utils/static/common";
import AppLogo from "../../utils/media/appLogo.png";
import {
  gptSelector,
  setLocale,
  toggleSearchView,
} from "../../redux/GPTSlice";
import translate from "../../utils/intl/translate";
import { SUPPORTED_LANGUAGES, USER_ICON } from "../../utils/static/constants";
import { SupportedLanguage } from "../../utils/static/type";
import React from "react";

const Header = () => {
  const user = useSelector(userSelector);
  const { isSearchView } = useSelector(gptSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userObj) => {
      if (userObj) {
        // User is signed in/up
        const { uid, email, displayName } = userObj;
        dispatch(addUser({ uid, email, displayName }));
        navigate(isSearchView ? "/search" : "/browse");
      } else {
        // User is signed out
        dispatch(removeUser({}));
        navigate("/");
      }
    });
    //unsubscribe on unmount
    return () => unsubscribe();
  }, []);

  const signOutHandler = (event: any) => {
    event.preventDefault();
    signOut(auth);
  };

  const searchClickHandler = (show: boolean) => {
    dispatch(toggleSearchView(show));
    dispatch(setLocale("en"));
  };

  const handleLanguageSelect = (event: any) => {
    const selectedLocale = event.target.value;
    dispatch(setLocale(selectedLocale));
  };

  const isUser = !isNullorEmpty(user.uid);

  return (
    <header
      className={`flex align-middle w-full py-4 z-10 shadow-none ${
        isUser
          ? `fixed z-30 opacity-90 rounded-b-lg px-4 md:px-16 justify-between ${
              !isSearchView ? "bg-black" : "bg-gradient-to-b from-black"
            }`
          : "absolute bg-gradient-to-b from-black px-4 justify-center md:justify-between"
      }`}
    >
      <Link to="/browse">
        <img
          className={`mx-auto ${
            isUser ? "md:w-32 h-12 md:ml-4 mt-1.5" : "w-40 md:ml-6"
          }`}
          src={AppLogo}
          alt="app logo"
          onClick={(event: SyntheticEvent) => searchClickHandler(false)}
        />
      </Link>

      {isUser && (
        <div className="flex justify-center md:justify-end items-center">
          <Link
            to="/watchlist"
            className="text-white mr-8 w-10 h-10 cursor-pointer text-3xl bg-amber-50 rounded-full shadow-black shadow-md"
          >
            📺
          </Link>
          {isSearchView ? (
            <select
              className="mr-7 p-1.5 rounded-md font-bold text-white bg-indigo-800"
              onChange={handleLanguageSelect}
            >
              {SUPPORTED_LANGUAGES.map((lang: SupportedLanguage) => {
                return (
                  <option
                    className="bg-white text-black opacity-70 font-mono"
                    key={lang.id}
                    value={lang.id}
                  >
                    {lang.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <Link
              to="/search"
              onClick={() => searchClickHandler(true)}
              className="text-white mr-10 w-9 h-9 cursor-pointer text-3xl bg-amber-50 rounded-full shadow-black shadow-md"
            >
              🔍
            </Link>
          )}
          <div
            className="flex justify-end w-9 h-9 m-3 cursor-pointer"
            onClick={() => {
              setOpenUserMenu(!openUserMenu);
            }}
          >
            <img className="rounded-md" alt="User Icon" src={USER_ICON} />
            <span className="mt-3 ml-2 text-xs text-white">
              {!openUserMenu ? "▼" : "▲"}
            </span>
          </div>
          {openUserMenu && (
            <ul className="absolute z-20 rounded-sm bg-white text-black w-[160px] font-mono h-auto p-2 right-16 top-[70px] shadow-lg">
              <li
                className="font-bold text-center border-y-2 py-1 capitalize text-red-600" 
              >
                {user?.displayName}
              </li>
              <li
                className="text-center mt-2 mb-1 cursor-pointer hover:text-lg"
                onClick={signOutHandler}
              >
                {translate("sign.out.text")}
              </li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
