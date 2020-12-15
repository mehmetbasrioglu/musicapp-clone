import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';





// index.js bootstrap included

function CreateMusicInfo({...props}) {
  return (
    <div className={props.classMusicInfo}>
     <MusicNoteIcon style={{color:"white"}}/>
     <marquee direction="left">{props.info}</marquee>
         </div>
  );
}

export default CreateMusicInfo;
