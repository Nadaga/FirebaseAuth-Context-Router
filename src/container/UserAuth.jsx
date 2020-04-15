import React from "react";
import firebase from "firebase";
import { useContext } from "react";
import GlobalContext from "./GlobalContext";
import { useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRjHUD9ShRvS2zSzMNW2ach12n2PbBeGE",
  authDomain: "fir-practice-926eb.firebaseapp.com",
  databaseURL: "https://fir-practice-926eb.firebaseio.com",
  projectId: "fir-practice-926eb",
  storageBucket: "fir-practice-926eb.appspot.com",
  messagingSenderId: "612981941472",
  appId: "1:612981941472:web:06349cc8edd37c791b5c85",
  measurementId: "G-ZGL1G32XEV",
};
// Initialize Firebase, Doesn't have to be stored, but have to called
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

// firebase.analytics();

const UserAuth = (props) => {
  //React Context
  const context = useContext(GlobalContext);
  // console.log(context);

  // console.log("UserAuth", props);
  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    console.log(context);
  }, [context]);

  const firebaseLogin = (params) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        context.setAuth(result.user);
        // console.log(context.auth);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return <div onClick={firebaseLogin}>google login</div>;
  // return <div className="">test</div>;
};

export default UserAuth;
