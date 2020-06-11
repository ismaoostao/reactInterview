import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./SelectedCandidates.css";



export default({redirect}) => {
  
  const goToChatRoom = () => {
    redirect('chatroom');
  }
    

  return (
    <div className="selectedCandidates">
    
         
      <div className="form-button"
      onClick={()=>{goToChatRoom()}}
      >LANCER L'INTERVIEW</div>
    </div>
  );
};

