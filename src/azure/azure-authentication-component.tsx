import React, { useState } from "react";
import AzureAuthenticationContext from "./azure-authentication-context";
import { AccountInfo } from "@azure/msal-browser";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';




const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;

// Log In, Log Out button
const AzureAuthenticationButton = ({ onAuthenticated }: any): JSX.Element => {
  // Azure client context
  
  const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();

  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [user, setUser] = useState<AccountInfo>(JSON.parse(localStorage.getItem("user") || '{}'));

  const logIn = (method: string): any => {
    const typeName = "loginPopup";
    const logInType = isIE ? "loginRedirect" : typeName;

    // Azure Login
    authenticationModule.login(logInType, returnedAccountInfo);
  };
  const logOut = (): any => {
    if (user) {
      onAuthenticated(undefined);
      localStorage.removeItem("user");
      // Azure Logout
      authenticationModule.logout(user);
    }
  };

  const returnedAccountInfo = (user: AccountInfo) => {
    // set state
    localStorage.setItem("user", JSON.stringify(user));
    setAuthenticated(user?.name ? true : false);
    onAuthenticated(user);
    setUser(user);
  };

  const showLogInButton = (): any => {
    return (

      <Button id="authenticationButton" onClick={() => logIn("loginPopup")}>
      </Button>
    );
  };

  const showLogOutButton = (): any => {
    return (
      <div id="authenticationButtonDiv">
        <div id="authentication">
          <Button id="authenticationButton" onClick={() => logOut()}>
            Log out
          </Button>
        </div>
      </div>
    );
  };

  const showButton = (): any => {
    return authenticated ? showLogOutButton() : showLogInButton();
  };

  return (
    <div id="authentication">
      {authenticationModule.isAuthenticationConfigured ? (
        showButton()
      ) : (
        <div>Authentication Client ID is not configured.</div>
      )}
    </div>
  );
};


export default AzureAuthenticationButton;

// eslint-disable-next-line 
const StyledButton = styled(Button)`
    background-color: #166797 !important;
    border-radius: 0;
    &:hover {
        background-color: #e85f14 !important;
    }
`;