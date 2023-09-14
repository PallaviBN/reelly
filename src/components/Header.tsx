import { SyntheticEvent, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/static/firebase";
import { addUser, removeUser, userSelector } from "../utils/redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isNullorEmpty } from "../utils/static/common";
import AppLogo from "../utils/media/appLogo.png";
import {
  gptSelector,
  setLocale,
  toggleSearchView,
} from "../utils/redux/GPTSlice";
import translate from "../utils/intl/translate";
import { SUPPORTED_LANGUAGES, USER_ICON } from "../utils/static/constants";
import { SupportedLanguage } from "../utils/static/type";
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
        navigate("/browse");
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

  const searchClickHandler = (event: SyntheticEvent, show: boolean) => {
    event.preventDefault();
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
      className={`shadow-lg flex justify-between w-full px-16 pt-2 z-10 ${
        isUser
          ? "fixed bg-black z-30 opacity-90 rounded-b-lg pb-1"
          : "absolute bg-gradient-to-b from-black py-8 px-4"
      }`}
    >
      <img
        className={`${isUser ? "w-32 h-12 ml-4 mt-1.5" : "w-40 ml-6"}`}
        src={AppLogo}
        alt="app logo"
        onClick={(event: SyntheticEvent) => searchClickHandler(event, false)}
      />
      {isUser && (
        <div className="flex justify-end items-center">
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
            <button
              onClick={(event: SyntheticEvent) =>
                searchClickHandler(event, true)
              }
              className="text-white mr-10 w-9 h-9 cursor-pointer text-3xl bg-amber-50 rounded-full shadow-black shadow-md"
            >
              🔍
            </button>
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
            <ul className="absolute z-20 rounded-sm bg-white text-black opacity-70 w-[160px] font-mono h-auto p-2 right-14 top-[64px] shadow-lg">
              <li
                className="text-center cursor-pointer"
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
