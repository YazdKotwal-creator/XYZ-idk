import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class RobotRunScreen extends Component {
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    let file1 = "C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/HomeScreen.js";
    let element1 = "<a href={file1}><Text style={{color:\'#ED1C24\'>Home</Font></a>"
    return (
      <body>

        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <Text style={{ color: 'blue' }}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            Home
          </Text>
        </div>


        <div id="main">
          
          <br />
          <center>
            <img src="../assets/xyz-logo-1.png" />
            <br />
            <h1>Robot Runner</h1>
            <img src="../assets/Robo-Run_ScreenShot.png" border="2" width="400" height="400" /><br />

            <button><a
              href="https://studio.code.org/projects/gamelab/VnDTl7DUBMN9yY5EMEruI6TTakckPaT5bpcrS8TfLCE">Play</a></button>
          </center>
        </div>


      </body>
    );
  }
}

/*
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js"><Text style={{color:"#FFD503">About Us</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Text style={{color:"#0072BC">Donor</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Text style={{color:"#ED1C24">Members</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js"><Text style={{color:"#FFD503">Volunteers</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Text style={{color:"#0072BC">Seniors</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js"><Text style={{color:"#ED1C24">Contact</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js"><Text style={{color:"#FFD503">Games</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ThemesScreen.js">Themes</a>


<div id="main">
  
  <br />
  <center>
    <img src="../assets/xyz-logo-1.png" />
    <br />
    <h1>Robot Runner</h1>
    <img src="../assets/Robo-Run_ScreenShot.png" border="2" width="400" height="400"/><br />

    <button><a
        href="https://studio.code.org/projects/gamelab/VnDTl7DUBMN9yY5EMEruI6TTakckPaT5bpcrS8TfLCE">Play</a></button>
  </center>
</div>
*/