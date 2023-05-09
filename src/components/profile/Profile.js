import React, { Component } from "react";
import axios from "axios";
import "./profile.css";

class Profile extends Component {
  state = {
    name: "",
    adress: "",
    email: "",
    phone: "",
    birth: "",
    skills: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        name: res.data.profile.name,
        email: res.data.profile.email,
        adress: res.data.profile.adress,
        birth: res.data.profile.birth,
        phone: res.data.profile.phone,
        skills: res.data.profile.skills,
      });
    });
  }
  render() {
    const { skills } = this.state;
    const profile = skills.map((skill) => {
      return (
        <div key={skill.id} className="bar">
          <span className="title">{skill.title}</span>
          <span className="perc">{skill.per}</span>
          <div className="parent">
            <span className={"sp"+skill.id}></span>
          </div>
        </div>
      );
    });
    return (
      <div className="profile_skills">
        <div className="container">
          <div className="profile">
            <h2 className="profile-title">
              <span>My </span>Profile
            </h2>
            <ul className="profile-list">
              <li className="profile-item">
                <span>Name</span>
                {this.state.name}
              </li>
              <li className="profile-item">
                <span>Birthday</span>
                {this.state.birth}
              </li>
              <li className="profile-item">
                <span>Address</span>
                {this.state.adress}
              </li>
              <li className="profile-item">
                <span>Phone</span>
                {this.state.phone}
              </li>
              <li className="profile-item">
                <span>Email</span>
                {this.state.email}
              </li>
              <li className="profile-item">
                <span>Website</span>
                <span className="web">www.google.com</span>
              </li>
            </ul>
          </div>

          <div className="skills">
            <h2 className="skills-title">
              Some <span>skills</span>
            </h2>
            <p className="skills-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </p>
            {profile}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
