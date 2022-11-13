import React from "react";
import "./mainPage.css";

export const MainPage = () => {

  return (
    
    <div className="mainPage">
      <img src="img.jpeg" alt="description of image"/>
      <div className="outCard"> 
        <div className="inCard">
          <h2> Welcome to Cash Moves! </h2>
          <h5> Our Mission is to help Educate inexperienced users on Investing
            in a way that is informative and interactive. </h5>
          <h6> Are you a beginner or expert?</h6>
          
          <div className="beg-button">
              <h4> Beginner </h4>
            </div>
          <div className="exp-button">
              <h4>Expert</h4>
              </div>
          </div>  
        </div>
      </div>
  );
};
export default MainPage;
