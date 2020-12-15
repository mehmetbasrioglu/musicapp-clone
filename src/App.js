import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CreateVideo from './createVideo';
import CreateHeader from './createHeader';
import CreateDesc from './createDesc';
import CreateMusicInfo from './createMusicInfo';
import CreateReaction from "./createReaction"
import CreateCopyLink from './createCopyLink';
import CreateComment from './createComment';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// index.js bootstrap included

function App() {
  const array = [{
    id:0,
    video:"https://v16.tiktokcdn.com/d92c5bb25487ff89135501778c22cfe6/5fd8bddb/video/tos/alisg/tos-alisg-pve-0037/be8a53a9c91d440785e5ab9793fd6c55/?a=1180&br=3958&bt=1979&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202012150744440102340821975E08BDE2&lr=&mime_type=video_mp4&qs=0&rc=MzNnZXVtandmdjMzMzgzM0ApNTc7ZTo5NGRoNzxoOGU6ZGdscDVmLjNyb2NfLS0yLzRzc2E1X18xMF41Nl42Ll9hY2A6Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1654494558725122.jpeg?x-expires=1608102000&x-signature=kRTWan%2FBLKDCj33m0CvUBwZ1JPU%3D",
    ad:"_master_choi_",
    ad2:"최사범님👊🏻 · 7-27",
    desc:"우리 #사제케미 최고 #foryou #master #크록하 #셔플 #shuffle #shuffledance #dance",
    song:"original sound - Eren simp",
    like:6097,
    comment:100,
    url:"https://www.tiktok.com/@_master_choi_/video/6854142134757494017?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  },
  {
    id:1,
    thumb:"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e1746cf915b44e028d9c8621f88f8b78?x-expires=1608037200&x-signature=FL2nx8Egq956h0cu31uwASegPJw%3D",
    video:"https://v19.tiktokcdn.com/bc66ecb7d96d1e39eeb2b6917b09c18d/5fd8c025/video/tos/alisg/tos-alisg-pve-0037c001/1b088b26232947d7a51ec95798f7ab7a/?a=1180&br=2388&bt=1194&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202012150754340102341090843A099091&lr=&mime_type=video_mp4&qs=0&rc=M2t5bGk1eGhneDMzNDgzM0ApOWQ3aDg7OTtnN2U3NzRlaGdlaWFub2FrcmJfLS0yLzRzc2A2Ll4zNl9gYmFeXjM2LzQ6Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1654494558725122.jpeg?x-expires=1608102000&x-signature=kRTWan%2FBLKDCj33m0CvUBwZ1JPU%3D",
    ad:"_master_choi_",
    ad2:"최사범님👊🏻 · 10-31",
    desc:"#happy #halloween @officialbigoneisthename #spooky #dance #shuffle #shuffledance ￼#셔플 #크록하",
    song:"Spooky, Scary Skeletons - Andrew Gold",
    like:6097,
    comment:100,
    url:"https://www.tiktok.com/@_master_choi_/video/6889626990068927745?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  },
  {
    id:2,
    thumb:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/832a6c14b1ee4a089fd54584fc6a1aa5?x-expires=1608040800&x-signature=b3lZOFPK11Kacr%2Fmxt2Fr8iguBY%3D",
    video:"https://v19.tiktokcdn.com/dd24ac33c0ae0837d4de41d4378d723f/5fd8c1be/video/tos/useast2a/tos-useast2a-ve-0068/ae24f7d530144259b791d91376fe8f93/?a=1180&br=3810&bt=1905&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202012150801160102340870436609C9B5&lr=&mime_type=video_mp4&qs=0&rc=M2U8NmQ5aHd3bzMzaDczM0ApZDtlODdlN2Q1N2c6MzhlPGdjZW1wLm9iX2tfLS0wMTZzczNhLi8tLjUvNDQ2XjY2X2M6Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-sg.tiktokcdn.com/musically-maliva-obj/1661604552317061~c5_100x100.jpeg?x-expires=1608105600&x-signature=xX5nRcOnhGE6HBz%2BTHTcRD7%2FOyM%3D",
    ad:"pionerka00",
    ad2:"Dina Denisova · 2019-9-4",
    desc:"#battle #shuffle #cuttingshapes #dance #shuffledance #denser #рек #хочувпопупулярное",
    song:"оригинальный звук - Dina Denisova",
    like:"1.1M",
    comment:3039,
    url:"https://www.tiktok.com/@pionerka00/video/6732835535519288581?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  },
  {
    id:3,
    thumb:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7bd440ad3946454a88d742c09e9bc118_1596049457?x-expires=1608040800&x-signature=kYBHWks88Wf4YcR6ukppcrQtlJM%3D",
    video:"https://v19.tiktokcdn.com/dec490e41ef5f38e3d212214c4faecea/5fd8c28a/video/tos/useast2a/tos-useast2a-pve-0068/b3a87c78a2e04698b7b1699e750ede53/?a=1180&br=3364&bt=1682&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20201215080445010115077029190A3F91&lr=&mime_type=video_mp4&qs=0&rc=MzxoO3BmdjR2djMzZTczM0ApNGczaTgzNDs7NzM3NTs2OWdtYmdoazBvY2RfLS00MTZzc2A0YjUzYTUvMDMyNDZfMF86Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-sg.tiktokcdn.com/musically-maliva-obj/1662366077282309~c5_100x100.jpeg?x-expires=1608105600&x-signature=uNK77gJBcCFZN7vbXp17ngTMO8c%3D",
    ad:"mkrasybarbas",
    ad2:"MkrasyBarbas · 7-29",
    desc:"De gira por el Depto shuffleando 😂 #shuffle #shuffledance",
    song:"Love Story - Disco Lines",
    like:"275.2K",
    comment:3039,
    url:"https://www.tiktok.com/@mkrasybarbas/video/6854980197746347270?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  },{
    id:4,
    thumb:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8ef49af5e67347a6ac0085ae588d32c1?x-expires=1608040800&x-signature=6o2wmFwVHkaBLQKy1LPRrS65G2Q%3D",
    video:"https://v19.tiktokcdn.com/9b52f3c5bc89ea4f38988349a312732f/5fd8c587/video/tos/useast2a/tos-useast2a-ve-0068c001/0b5768b8be9f42f794efe64359fdc60e/?a=1180&br=2902&bt=1451&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202012150817140102341051414A0B4754&lr=&mime_type=video_mp4&qs=0&rc=ajc3ZGxscW51eDMzZzczM0ApaTVpZTg6OjwzNzhkNDk2aGdeZnJoc2ZzcmJfLS1jMTZzczBgYy5fX2FfNS1jMWMyY2I6Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/a63af5abda86c3da14dec5b6ab14dbb1~c5_100x100.jpeg?x-expires=1608105600&x-signature=%2BmrbTuTq75QgEqXvNY4qxMrwgJI%3D",
    ad:"vansecoo",
    ad2:"Vanesa Seco · 10-31",
    desc:"ITS UP!!! Watch the full version on my IG @vansecoo !! #shuffle #shuffledance #cuttingshapes #footwork #fyp #basshouse",
    song:"original sound - Vanesa Seco",
    like:"60.6K",
    comment:479,
    url:"https://www.tiktok.com/@vansecoo/video/6889873290861481222?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  },{
    id:5,
    thumb:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ee5ae5d59199466b8c101cd1de4eddf8_1606415284?x-expires=1608044400&x-signature=AbEOSZd65xe1Pd%2BCkWW2TPL6HKE%3D",
    video:"https://v19.tiktokcdn.com/5ee8d84efff34e3f2a723096277a0e2e/5fd8cfd1/video/tos/useast2a/tos-useast2a-ve-0068c001/4c741087a502430ca85652edc0b4bfc1/?a=1180&br=7580&bt=3790&cd=0%7C0%7C0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202012150901210102340820980301B0E2&lr=&mime_type=video_mp4&qs=0&rc=ajM1dWc6bDR5eDMzOTczM0ApOzc2ZzU6NDszNzk3Njk3OWdmMGVmaDVxNHNfLS0tMTZzcy4tYTZiXi4vXi0yMWM0NWI6Yw%3D%3D&vl=&vr=",
    profil:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/a63af5abda86c3da14dec5b6ab14dbb1~c5_100x100.jpeg?x-expires=1608105600&x-signature=%2BmrbTuTq75QgEqXvNY4qxMrwgJI%3D",
    ad:"vansecoo",
    ad2:"Vanesa Seco · 11-26",
    desc:"With my squaaa #shuffle #cuttingshapes #itstricky #shuffledance #fyp #xyzbca",
    song:"It's Tricky - RUN DMC",
    like:"61.6K",
    comment:471,
    url:"https://www.tiktok.com/@vansecoo/video/6899500961463635205?sender_device=pc&sender_web_id=6906270727461504517&is_from_webapp=1"
  }
]
  const [index,setIndex] = React.useState(0)
  const prevvideo_oncekivideo = (e) => {
    setIndex(index - 1)
  }
  const nextvideo_siradakivideo = (e) => {
    setIndex(index + 1)
  }
  return (
    <div className="container">
      <div className="container nopadding maks">

<div className="row ">
<div class="col-md ">
<div className="videocol">
{array.map(item=>(
  <>
  {item.id === index ? (
    <CreateVideo  videosource={item.id === index ? item.video:""} className="render-video" classBackground="render-div" blur={`url(${item.id === index ? item.thumb:""})`}/>
 
  ):""}
     
   </>
))}
{index > 0 ? <button type="submit" className="prev" onClick={prevvideo_oncekivideo}><NavigateBeforeIcon /></button> : ""}
{ index < array.length - 1 ? <button type="submit"className="next"  onClick={nextvideo_siradakivideo}><NavigateNextIcon /></button> : ""}
</div>
    </div>
<div class="col-md ">
{array.map(item=>(
  <>

  {item.id === index ? (
      <>
  <CreateHeader classHeader="header" profil={item.id === index ? item.profil:""} ad={item.id === index ? item.ad:""} ad2={item.id === index ? item.ad2:""}/>
  <CreateDesc classDesc="description"  desc={item.id === index ? item.desc:""}/>
  <CreateMusicInfo classMusicInfo="music" info={item.id === index ? item.song:""}/>
  <CreateReaction  begeni={item.id === index ? item.like:""} yorum={item.id === index ? item.comment:""}/>
  <CreateCopyLink classLinkArea="classLinkArea" link={item.id === index ? item.url:""}/>
  <CreateComment classComment="commentarea"/>
  </>
  ):""}
  </>
))}
</div>
</div>


</div>
    </div>
  );
}

export default App;
