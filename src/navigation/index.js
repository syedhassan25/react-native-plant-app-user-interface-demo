import React from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import {Image} from 'react-native'; 

import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
// import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

import {theme} from '../constants';

const screens = createStackNavigator({
    Welcome,
    // Login,
    // SignUp,
    // Forgot,
    // Explore,
    // Browse,
    // Product,
    // Settings,
},{
    defaultNavigationOptions:{
        headerStyle:{},
        headerBackTitle:null,
        headerBackImage:<Image />,
        headerLeftContainerStyle:{},
        headerRightContainerStyle:{}
    }
});

export default  createAppContainer(screens);