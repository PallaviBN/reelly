import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/static/firebase";
import { addUser, removeUser, userSelector } from "../utils/redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isNullorEmpty } from "../utils/static/common";
import AppLogo from "../utils/media/appLogo.png";

const Header = () => {
  const user = useSelector(userSelector);
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
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const isUser = !isNullorEmpty(user.uid);

  return (
    <header
      className={`shadow-lg flex justify-between w-full px-16 pt-2 z-10 ${
        isUser ? "fixed bg-black z-30 opacity-90 rounded-b-lg pb-1" : "absolute bg-gradient-to-b from-black py-8 px-4"
      }`}
    >
      <img
        className={`${isUser ? "w-32 h-12 ml-4 mt-1.5" : "w-40 ml-6"}`}
        src={AppLogo}
        alt="app logo"
      />
      {isUser && (
        <>
          <div className="flex justify-end w-9 h-9 m-3 cursor-pointer">
            <img
              className="rounded-md"
              alt="User Icon"
              src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              onClick={() => {
                setOpenUserMenu(!openUserMenu);
              }}
            />
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
                Sign Out
              </li>
            </ul>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
