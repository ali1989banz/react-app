import React, { Component } from "react";
import {SocialMedia,Social,Icon,P,Info1,Info2} from "./style.js";
import axios from "axios";


class SocialSec extends Component {
  state = {
    social:[]
  }
  componentDidMount(){
    axios.get("js/data.json").then(res =>{
      this.setState({
        social:res.data.social,
      })
    })
  }

  render() {
    const {social} = this.state;
    const socialList = social.map((socialItem)=>{
      return (
        <Social key={socialItem.id} item={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <P>
            <Info1>{socialItem.title}</Info1>
            <Info2>{socialItem.body}</Info2>
          </P>
        </Social>
      )
    })
    return (
      <SocialMedia>
        {socialList}
      </SocialMedia>
    );
  }
}

export default SocialSec;
