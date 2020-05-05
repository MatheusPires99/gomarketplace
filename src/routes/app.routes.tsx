import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Image } from "react-native";

import Logo from "../assets/logo.png";

import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: "#F0F0F5" },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: () => <Image source={Logo} />,
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: () => <Image source={Logo} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },

        headerBackImage: () => (
          <FeatherIcon name="chevron-left" size={24} color="#3D3D4D" />
        ),
      }}
      name="Cart"
      component={Cart}
    />
  </App.Navigator>
);

export default AppRoutes;
