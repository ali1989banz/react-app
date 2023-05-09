import React , {Component} from "react";
import "./home.css"

class Home extends Component{
  
  render(){
    return ( 
      <div className="home" id="home">
        <div className="container">
            <div className="home-information">
                <h1 className="home-title margin-bottom">ali albhrani</h1>
                <h2 className="home-info">Creative Director</h2>
                <p className="home-desc">
                    Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </p>
                <button className="home-btn">Let's Begin</button>
            </div>
        </div>
    </div>
    )
  }
}

export default Home;