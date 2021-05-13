import React from "react";
import { Admin, Resource } from "react-admin";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import { theme } from "./theme";
import simpleRestProvider from "ra-data-simple-rest";
import MyLayout from "./MyLayout";
import AzureAuthenticationButton from "./azure/azure-authentication-component";
import { AccountInfo } from "@azure/msal-browser";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { JiscBoombox } from "jisc-innovation-mui-components";

import { StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonLog: {
    backgroundColor: "black;",
  },
}));

function App() {
  // current authenticated user
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  const classes = useStyles();
 
  return (
    <StylesProvider injectFirst>
      <div id="App">
        

    {currentUser ? 
        <div>
          <Admin
            theme={theme}
            layout={MyLayout}
            dataProvider={simpleRestProvider("http://localhost:3000")}          >
            <Resource
              name="ChatRooms"
              list={PostList}
              create={PostCreate}
              edit={PostEdit}
            />
            <Resource
              name="users_emails"
              list={UserList}
              create={UserCreate}
              edit={UserEdit}
            />
          </Admin>
        </div>:  <JiscBoombox>
                <Typography variant='h3'>Welcome to OpenHuddle Admin</Typography>
                <br></br>
                <AzureAuthenticationButton className={classes.buttonLog} onAuthenticated={onAuthenticated} />

            </JiscBoombox>
    }
      </div>
    </StylesProvider>
  );
}
export default App;

 

