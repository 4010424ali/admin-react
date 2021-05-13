import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Logo.png';
import AzureAuthenticationButton from './azure/azure-authentication-component';
import { useState } from 'react';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

const MyAppBar = (props) => {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState();

  const onAuthenticated = async (userAccountInfo) => {
    setCurrentUser(userAccountInfo);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar {...props}>
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <Typography
          variant="h5"
          style={{ marginLeft: '20px', color: 'black' }}
          noWrap
        >
          OpenHuddle Admin
        </Typography>
        <span className={classes.spacer} />
        <AzureAuthenticationButton
          className={classes.buttonLog}
          onAuthenticated={onAuthenticated}
        />
      </AppBar>
    </div>
  );
};

export default MyAppBar;
