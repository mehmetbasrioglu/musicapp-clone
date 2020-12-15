import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';





// index.js bootstrap included

function CreateComment({...props}) {
  return (
    <div className={props.classComment}>
    <h4>
    Login to see comments
    </h4>
    <p>Login to see comments and like the video.</p>
    <button type="submit">Login</button>
    <a href="#" style={{color:"white"}}>Don’t have an account? <span style={{color:"#fe2c55"}}>Sign up</span></a>
         </div>
  );
}

export default CreateComment;
