import React, { SyntheticEvent, useRef, useState } from "react";
import Header from "./Header";
import { isNullorEmpty, validate } from "../utils/static/common";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/static/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleFormHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsSignIn(!isSignIn);
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    let message: string | null = null;
    if (
      (!isSignIn && isNullorEmpty(nameRef.current?.value)) ||
      isNullorEmpty(emailRef.current?.value) ||
      isNullorEmpty(pwdRef.current?.value)
    ) {
      message = "All fields are required.";
    } else {
      message = validate(
        isSignIn,
        nameRef.current?.value,
        emailRef.current?.value,
        pwdRef.current?.value
      );
    }
    setErrorMsg(message);
    if (!isNullorEmpty(message)) return;
    if (!isSignIn) {
      // Create new user
      if (emailRef.current?.value && pwdRef.current?.value) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current?.value,
          pwdRef.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameRef.current?.value,
            })
              .then(() => {
                // Profile updated!
                if (auth.currentUser) {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(addUser({ uid, email, displayName }));
                }
              })
              .catch((error) => {
                // An error occurred
                setErrorMsg(error.errorCode.slice(5).split("-").join(" "));
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            setErrorMsg(errorCode.slice(5).split("-").join(" "));
          });
      }
    } else {
      //Login as existing user
      if (emailRef.current?.value && pwdRef.current?.value) {
        signInWithEmailAndPassword(
          auth,
          emailRef.current?.value,
          pwdRef.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user8 = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode.slice(5).split("-").join(" "));
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-t from-black">
        <img
          className="absolute h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>

      <form className="absolute top-1/4 mx-auto w-5/6 lg:w-[30%] h-[65%] lg:h-auto overflow-auto right-0 left-0 px-16 py-14 bg-opacity-80 flex flex-col rounded-md">
        <h1 className="text-white font-medium text-3xl mb-7">
          {`Sign ${isSignIn ? "In" : "Up"}`}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            className="mb-4 rounded-[4px] h-12 pl-5 bg-gray-700 text-yellow-50"
            placeholder="Name"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          className="mb-4 rounded-[4px] h-12 pl-5 bg-gray-700 text-yellow-50"
          placeholder="Email"
        />
        <input
          ref={pwdRef}
          type="password"
          className="mb-1 rounded-[4px] h-12 pl-5 bg-gray-700 text-yellow-50"
          placeholder="Password"
        />
        {!isSignIn && (
          <p className="text-gray-400 text-[11px] mb-3">
            Password should be at least 8 characters long with at least 1
            uppercase letter, 1 lowercase letter, 1 number, and 1 special char.
          </p>
        )}
        {!isNullorEmpty(errorMsg) && (
          <p className="text-red-400 capitalize mt-2">{errorMsg}</p>
        )}
        <button
          className="p-4 my-3 bg-red-700 text-white rounded-[4px]"
          onClick={submitHandler}
        >
          {`Sign ${isSignIn ? "In" : "Up"}`}
        </button>
        <p className="text-gray-400">
          {isSignIn ? "New to Reelly? " : "Already have an account? "}
          <a
            className="text-white"
            target="_self"
            href="/"
            onClick={toggleFormHandler}
          >
            {isSignIn ? "Sign up now" : "Login"}
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
