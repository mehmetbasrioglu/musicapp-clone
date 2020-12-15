import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {FaShareAlt} from "react-icons/fa"




// index.js bootstrap included

function CreateCopyLink({...props}) {
  return (
    <div className={props.classLinkArea}>
     <input type="text" value={props.link} disabled ></input>
    <button  type="submit"><FaShareAlt style={{marginRight:"10px"}}/> Copy Link</button>
    </div>
  );
}

export default CreateCopyLink;
