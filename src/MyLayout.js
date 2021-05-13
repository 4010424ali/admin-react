// in src/MyLayout.js
import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar.js';


const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;