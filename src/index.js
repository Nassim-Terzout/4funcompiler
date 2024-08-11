import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from "aws-amplify";
import config from "./config.json";
import "./App.css"

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
