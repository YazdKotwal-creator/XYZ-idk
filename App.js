/*
Red-#ED1C24
Yellow- #FFD503
Blue-#0072BC
*/

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems, DrawerItem } from 'react-navigation-drawer'
import { NavigationContainer } from '@react-navigation/native'
import { AppRegistry } from 'react-native'

import HomeScreen from './screens/HomeScreen'
import MembersScreen from './screens/MembersScreen'
import SeniorsScreen from './screens/SeniorsScreen'
import VolunteersScreen from './screens/VolunteersScreen'
import DonorScreen from './screens/DonorScreen'
import PPScreen from './screens/PPScreen'
import AAScreen from './screens/AAScreen'
import XIScreen from './screens/XIScreen'
import AboutUsOvLyScreen from './screens/AboutUsOvLy'
import LogoAUScreen from "./screens/LogoAU"
import PointsTableScreen from "./screens/PointsTable"
import ThemesScreen from "./screens/ThemesScreen"
import ContactUsScreen from "./screens/ContactUs"
import * as groupsScreens from "./screens/groupsScreens"
import GameSelectScreen from './screens/GameSelect';

const DrawerNavigator = createDrawerNavigator({
  "Home": {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#ED1C24", fontWeight: "bold" }}><br />    Home<br /> </Text>
      )
    }
  },
  "Members": {
    screen: MembersScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Members<br /> </Text>
      )
    }
  },
  "Volunteers": {
    screen: VolunteersScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#0072BC", fontWeight: "bold" }}><br />    Volunteers<br /> </Text>
      )
    }
  },
  "Donor": {
    screen: DonorScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#ED1C24", fontWeight: "bold" }}><br />    Donor<br /> </Text>
      )
    }
  },
  "Seniors": { 
    screen: SeniorsScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Seniors<br /> </Text>
      )
    }
  },
  "About Us" : {
    screen : AboutUsOvLyScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#0072BC", fontWeight: "bold" }}><br />    About Us<br /> </Text>
      )
    }
  },
  "Contact Us" : {
    screen : ContactUsScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#ED1C24", fontWeight: "bold" }}><br />    Contact Us<br /> </Text>
      )
    }
  },
  "Games" : {
    screen : GameSelectScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Games<br /> </Text>
      )
    }
  },


    "Points Table" : {
      screen : PointsTableScreen
    },
    "Themes" : {
      screen : ThemesScreen
    },
    "Logo" : {
      screen : LogoAUScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupOverlay" : {
      screen : groupsScreens.groupsOverlayScreen,
      navigationOptions: {
        title: ""
      }
    },
    "GroupBB" : {
      screen : groupsScreens.BBScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupCS" : {
      screen : groupsScreens.CSScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupDD" : {
      screen : groupsScreens.DDScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupJG" : {
      screen : groupsScreens.JGScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupKC" : {
      screen : groupsScreens.KCScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupNK" : {
      screen : groupsScreens.NKScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupRR" : {
      screen : groupsScreens.RRScreen,
      navigationOptions : {
        title : ""
      }
    },
    "GroupTT" : {
      screen : groupsScreens.TTScreen,
      navigationOptions : {
        title : ""
      }
    },
    "Pourushap's Platoon": {
      screen: PPScreen,
      navigationOptions: {
        title:""
      }
    },
      "Artaxerxes' Army": {
        screen: AAScreen,
        navigationOptions: {
          title:""
        }
      },
      "Xerxes’ Invincibles": {
        screen: XIScreen,
        navigationOptions: {
          title:""
        }
      },
},
  {
    initialRouteName: "Home",
    //drawerType: "slide",
    contentOptions: {
      activeTintColor: "Green",
    }
  }
);


export default function App() {
  return (
    <AppContainer>
      <NavigationContainer>
      </NavigationContainer>
    </AppContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir'
  },
});

const AppContainer = createAppContainer(DrawerNavigator)

AppRegistry.registerComponent('App', () => AppContainer)