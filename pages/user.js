import React from "react";
import "./user.css"

 
export const user = () => {
  return (
    
    <div className="outCard">
      <div className="inCard">
        <h2>User</h2>
        <h3>Welcome Back Temoc!</h3>
        <h5>Current Level: Beginner</h5>
        <h6>Resume where you last left off?</h6>
        <div className="beg-button">
              <h4> Beginner 📚 </h4>
            </div>
        <div className="exp-button">
              <h4> LogOut 📴</h4>
            </div> 
        </div>
      </div>
    
  );
};
  
export default user;