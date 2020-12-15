import React from 'react';
import {GoVerified} from "react-icons/go"





// index.js bootstrap included

function CreateHeader({...props}) {
  return (
    <div className={props.classHeader}>
     <div className="headeravatarsection">
      <div className="headeravatarsection_avatar">
      <img src={props.profil}/>
      </div>
       <div className="headername">
        <h4>{props.ad} <GoVerified style={{color:"#0099fb"}}/></h4>
        <p>{props.ad2}</p>
      </div>
      <div className="followsection">
        <button type="submit">Follow</button>
      </div>
     </div>
       </div>
  );
}

export default CreateHeader;
