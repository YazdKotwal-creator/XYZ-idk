import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class DonorScreen extends Component {

  render() {

    return (
      <View style={styles.body}>
        <body>
          <div id="main">
            <center>
              <img src={require('../assets/xyz-logo-1.png')} />
              <br />
              <h1>XYZ Donors</h1>
              <br />
  Dear Sir / Madam,<br />
              <br />
  Xtremely Young Zoroastrians (XYZ) is an organisation
  aimed at promoting togetherness and camaraderie within
  the youngsters of the Zoroastrian Community. XYZ aspires
  to mould the children between the ages of 5 and 15 years
  to become better individuals and inculcate the Zoroastrian
  values through fellowship and service activities.
  <br />
  We at Xtremely Young Zoroastrians would like to thank you
  so much for showing interest in our activities. XYZ
  Foundation is a registered trust with the Charity
  Commissioner of Greater Mumbai with the Registered Trust
  No. E30970 (M) from 16th March 2015 with
  PAN No. AAATX0125H and TAN No. MUMX00599E.
   <br />
  XYZ Foundation has received the 80-G Certificate from the
  Office of the Commissioner of Income Tax. From 29th July
  2016 onwards, all donations received by XYZ Foundation
  will also benefit the donor with 50% deduction in their
  Income Tax.
  <br />
  The purpose of XYZ is to build a strong sense of community
  belonging and pride in the Zoroastrian children.
  The religious practices are an important part of our culture
  and we want our children to start adhering to them from an
  early age.
  <br />
  Since leadership skills like goal setting, decision making,
  team work, people skills, money management and ethics
  are also very important attributes, they too will be inculcated
  through various activities of XYZ through our Sunday
  sessions which take place in 8 centres all over the city of
  Mumbai, namely – Colaba, Tardeo, Byculla, Parel, Dadar,
  Avabai Petit School Boarders, Bandra and Andheri.
  <br />
  XYZ Foundation has carried out numerous events for the
  children of our community like XYZ Games,
  XYZs Got Talent, XYZ Summer Camp,
  XYZ LAFA – Literary Arts & Fine Arts, XYZ Indoor Mania,
  XYZ Xtravaganza and XYZ Leadership Camp.
  <br />
  To meet our objectives, we solicit the support of each and
  every individual and organisation that shares our vision for
  a brighter future. We hope that you help to catapult our
  effort and enthusiasm to its zenith.
  <br />
  XYZ currently has 500 members, ie. children in the age
  group of 5-15 years in our 8 centres.
  <br />
  We thus request you, to give us some time to meet, so that
  we can explain our initiative to you personally and/or
  indicate in which way you can help to further XYZ’s
  objectives. Your support can be either in cash or kind and
  will be invaluable to help develop our cause.
  <br />
  We take this opportunity to thank you in anticipation, in
  helping us realise our vision, which will be completely in the
  interest of our Xtremely Young Zoroastrians.
  <br />
  Looking forward to hearing from you soon.
  <br />
              With warm regards,
              Hoshaang Gotla
  <br />
                Founder, XYZ
  <br />
  <img src={require('../assets/Donor chart.png')} width="731" height="379"/>
              <br />
                    Donations of any amount are accepted. Cheques must be
                    drawn in favour of XYZ Foundation and could we request
                    you to please provide your PAN Number at the back of
                    cheque.
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


/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
/*
<body>
                <div id="mySidebar" class="sidebar">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\HomeScreen.js"><Text style={{color:"#ED1C24">Home</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js"><Text style={{color:"#FFD503">About Us</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Text style={{color:"#0072BC">Donor</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Text style={{color:"#ED1C24">Members</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js"><Text style={{color:"#FFD503">Volunteers</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Text style={{color:"#0072BC">Seniors</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js"><Text style={{color:"#ED1C24">Contact</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js"><Text style={{color:"#FFD503">Games</font></a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
                  <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\Themes.js">Themes</a>
                </div>
*/