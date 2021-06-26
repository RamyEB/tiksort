import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { AuthContext } from '../services/Auth';
import firebase from "firebase/app";
import app from "../services/base";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { isPlatform } from '@ionic/react';

import { GooglePlus } from '@ionic-native/google-plus'

import { Plugins } from '@capacitor/core';



const Login = ({ history }) => {

  const onSubmit = useCallback(
      () => {
        try{
          //GoogleAuth.init()
          var provider = new firebase.auth.GoogleAuthProvider();
          GooglePlus.Login(
            {
              scopes: "",
              webClientId: "e38226866827-tm4o0npf3csef91s7pg6qskkb4stcni6.apps.googleusercontent.com",
              offline: true
            },
            function (obj) {
              alert(JSON.stringify(obj)); // do something useful instead of alerting
            },
            function (msg) {
              alert('error: ' + msg);
            }).then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
          });
         /* if (isPlatform('ios')) {
            // GoogleAuth.signIn()
            try{
             
          /*
              GooglePlus.login(
              {
                scopes: "",
                webClientId: "e38226866827-tm4o0npf3csef91s7pg6qskkb4stcni6.apps.googleusercontent.com",
                offline: true
              },
              function (obj) {
                alert(JSON.stringify(obj)); // do something useful instead of alerting
              },
              function (msg) {
                alert('error: ' + msg);
              })
              
            }catch(error){
              console.log(error)
            }

          } else {
            console.log("web method")
            app
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
              console.log(result);
              var credential = result.credential;
              var token = credential.accessToken;
              var user = result.user;
            })
          }*/
          history.push("/");
        }catch (error){
          console.log(error);
        }
    },
      [history]);

  const { currentUser } = useContext(AuthContext)

  if(currentUser){
    return <Redirect to="/" />
  }

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Se connecter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <button type="button" onClick={onSubmit}> Se connecter avec google</button>
        </IonContent>
      </IonPage>
  )
}


export default withRouter(Login);