import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class testScreen extends Component {


  render() {
    return (
      <View style={styles.body}>
        <body>
          <div id="main">
            <center>
              <img src={require('../assets/xyz-logo-1.png')} />
              <h1>Volunteers</h1>
              <br />
            XYZ would not be able to work as an
            organisation without the tireless effort put
            in by the volunteers. These are people who
            take time out from their personal lives to
            make a difference in the lives of the
            Xtremely Young Zoroastrians.
            <br />
            College students, parents, grand parents
            and numerous community members have
            come together to help with organising
            meetings and events for the benefit of the
            future of the community.
            <br />
            We at XYZ hope that many more
            individuals of the community come
            forward and support this movement.
          </center>
          </div>


        </body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    align: "center",
    margin: "auto"
  }
})
/*
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
<div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <Text style={{ color: 'blue' }}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            Home
            World
          </Text>
        </div>
part of div-id main
          <button className="openbtn" onClick={this.openNav}>☰`</button>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js"><Text style={{color:"#FFD503">About Us</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Text style={{color:"#0072BC">Donor</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Text style={{color:"#ED1C24">Members</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js"><Text style={{color:"#FFD503">Volunteers</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Text style={{color:"#0072BC">Seniors</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js"><Text style={{color:"#ED1C24">Contact</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js"><Text style={{color:"#FFD503">Games</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ThemesScreen.js">Themes</a>*/