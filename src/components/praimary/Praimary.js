import React, { Component } from "react";

import About from "./../about/About";
import Home from "./../home/Home";
import Profile from "./../profile/Profile";
import Protfilio from "./../protfolio/Protfolio";
import SocialSec from "./../social/Social";
import Work from "./../work/Work";
import FooterSec from "./../footer/Footer";
/* __________________________________________________ */

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Protfilio />
        <Profile />
        <About />
        <SocialSec />
        <FooterSec />
      </div>
    );
  }
}
export default Index;
