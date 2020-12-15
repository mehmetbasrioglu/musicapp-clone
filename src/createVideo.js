import React from 'react';

import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
// index.js bootstrap included

function CreateVideo({...props}) {
  const [isPlaying,setPlaying] = React.useState(true)
  const [muteicon,setMutedIcon] = React.useState(true)
  const [muted,setMuted] = React.useState(false)
  const videoRef = React.createRef()
  const play_pause = (e)=>{
    if(isPlaying){
      e.target.pause()
      setPlaying(false)
    }
    else{
      e.target.play()
      setPlaying(true)
    }
  }
  const play_pausediv = (e)=>{
    if(isPlaying){
      videoRef.current.pause()
      setPlaying(false)
    }
    else{
      videoRef.current.play()
      setPlaying(true)
    }
  }
  const showmute = (e) => {
    setMutedIcon(false)
    setMuted(false)
  }
  const hidemute = (e) => {
    setMutedIcon(true)
    setMuted(true)
  }
  return (
    <>
     

    <div className={props.classBackground} style={{background:props.blur}}>
    {!isPlaying ? <div className="pause"     onClick={play_pausediv}><PlayArrowRoundedIcon></PlayArrowRoundedIcon></div> : ""}
    {!muteicon && !muted ? <div className="vol"><VolumeUpRoundedIcon></VolumeUpRoundedIcon></div> : ""}
    <video ref={videoRef} autoPlay={true}
    className={props.className}
    loop={true}
    src={props.videosource}
    onClick={play_pause}
    onMouseEnter={showmute}
    onMouseLeave={hidemute}
    />

  
    </div>
    </>
  );
}

export default CreateVideo;
