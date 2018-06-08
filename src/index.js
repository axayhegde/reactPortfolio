import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDBogcDnWnzdDtjSKjO54vjPKIymfdFU5A",
    authDomain: "react-portfolio-5eb1a.firebaseapp.com",
    databaseURL: "https://react-portfolio-5eb1a.firebaseio.com",
    projectId: "react-portfolio-5eb1a",
    storageBucket: "react-portfolio-5eb1a.appspot.com",
    messagingSenderId: "365810608382"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
