import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import styles from './extra.css'
import f1 from './f1.png' 
import f2 from './f2.png' 
import f3 from './f3.png' 
import a1 from './a1.jpg' 
// import av from './av.png' 

import c1 from './c1.jpg' 
import c2 from './c2.jpg' // Victoria Naumenko 
import m1 from './m1.jpg' // John Rodenn Castillo 
import dash from './dash.png' 

// import bw1 from './bw1.png' 

import bw2 from './bw2.png' 
// import summatti from './summatti.jpg' 
import sum2 from './sum2.png' 

import demys1 from './demys1.png' 
import metaplex1 from './metaplex1.png' 
import uoft1 from './uoft1.png' 
// import uoft2 from './uoft2.jpg' 
import game1 from './game1.png' 
import game2 from './game2.png' 

import g1 from './g1.png' 


function App() {
  SwiperCore.use([Autoplay])

  return (
    <div className="App">


<div class="flex flex-col w-full  absolute lg:flex-row" style={{height:'100%'}}>
  <div style={{width:'42%'}}> 
  <Swiper
      autoplay={{ delay: 20000 }} 
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{height:'100%'}}
    >
            <SwiperSlide> <img src={m1} class="w-full h-full" /></SwiperSlide>
            <SwiperSlide> <img src={c2} class="w-full h-full" /></SwiperSlide>

            <SwiperSlide> <img src={c1} class="w-full h-full" /></SwiperSlide>

            <SwiperSlide> <img src={f1} class="w-full h-full" /></SwiperSlide>

      <SwiperSlide >    <img src={f3} class="w-full h-full" /></SwiperSlide>
      <SwiperSlide> <img src={f2} class="w-full h-full" /></SwiperSlide>
      <SwiperSlide> <img src={a1} class="w-full h-full" /></SwiperSlide>

    </Swiper> 
    </div>
  <div class="h-screen "style={{width:'58%',   overflow:'auto'}}>  
  

        {/* Main port; right side */}

    {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" /> */}
    <div class="  w-9/10 bg-base-0  "  >
  <div class="card-body text-left text-white ml-5">
    <div class="flex row">    <h1 class="text-6xl font-bold">
  Kevin Li
  {/* <a class=" font-bold text-4xl link link-hover text-blue-600 hover:text-white" href="/project">  ➤</a> */}
        </h1>  </div>

 
  {/* <a class=" font-bold text-4xl link link-hover text-blue-600 hover:text-white" href="/project">  ➤</a> */}
        


        <h1 class="text-3xl font-bold text-gray-400">Software Engineer</h1>
        <h1 class="text-1xl font-bold justify-self-end text-blue-500" >
  University of Toronto H.BSc
        </h1> 
        <p> </p>

        <p>Software Engineer with 5+ years of experience. I specialize in building web apps using React front-ends and NodeJS back-ends. I also work with Python and Solidity.</p>

<p> </p>
<p>I work remotely with teams to build modern and reliable solutions to complex problems – helping global companies, start-ups and web agencies reach business goals with technology, on-budget, on-time. I am currently in Toronto, Canada.</p>


  </div>


</div>


<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">AggrView</a>       2021 - Present
        </h1>   
        
        <p>Trading dashboard aggregating V3.Aggr and TradingView for discretionary trading. Notes stored to localStorage via React hooks. Aggr script available on request. </p>

<div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  React
</div>
<div class="badge badge-success gap-2 bg-green-400">
  Tailwind
</div>
<div class="badge badge-warning gap-2 bg-purple-400">
  DaisyUI
</div>
<div class="badge badge-error gap-2 bg-white">
  Vercel
</div>
<div class="badge badge-error gap-2 ">
  Web3
</div>

  </div>

  </div>


  <figure><img src={dash} alt="Preview"/></figure>

</div>



{/* ;/////////////////////////////  */}

<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">Metaplex Candy Machines</a>      2021 - Present 
        </h1>   
        <p>I help companies create generative art collections & responsive mint sites compatible with Phantom using Typescript, TailwindCSS, Arweave/IPFS, Metaplex and Solana-cli.</p>
<div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  React
</div>
<div class="badge badge-success gap-2 bg-yellow-200">
  TypeScript
</div>
<div class="badge badge-success gap-2 bg-green-400">
  Tailwind
</div>
<div class="badge badge-warning gap-2 bg-white">
  Solana-cli
</div>
<div class="badge badge-warning gap-2 bg-gray-400">
  Arweave
</div>
<div class="badge badge-error gap-2 ">
  Web3
</div>
  </div>
  </div>
  <figure><img src={metaplex1} alt="metaplex1"/></figure>
</div>

{/* ;///////////////////////////// */}
{/* ;///////////////////////////// */}

<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">BetterWorth</a> 2020-2021
        </h1>   
        
        <p>Betterworth utilizes DISC personality tests to improve financial advisory relationships. I built out their MERN stack app & api using React, MaterialUI, Node, and AWS   </p>

        <div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  React
</div>
<div class="badge badge-error gap-2 bg-white">
  MaterialUI
</div>
<div class="badge badge-success gap-2">
  NodeJS
</div>
<div class="badge badge-warning gap-2">
  MongoDB
</div>

  </div>
  </div>


  <figure><img src={bw2} alt="BetterWorth"/></figure>

</div>

{/* ;/////////////////////////////  */}



{/* ;/////////////////////////////  */}

<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">UI Redesign</a>    2021 
        </h1>   
        <p>Helped redesign one of the university's department pages. Conducted contextual inquiry and focus group studies to identify issues. Produced wireframes and demos along with user models.  </p>
        <div class="badge badge-success gap-2 bg-pink-400 text-white">
  UI/UX Design
</div>

  </div>
  <figure><img src={uoft1} alt="uoft1"/></figure>
</div>

{/* ;///////////////////////////// */}

{/* ;///////////////////////////// */}
<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">Summatti</a>  2019-2020
        </h1>   
        
        <p>A no-code, AI-powered speech analytics platform to empower your in-house or off-site customer support & service teams. I helped build their web app, api and end-to-end encryption in React and NodeJS </p>

<div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  React
</div>
<div class="badge badge-error gap-2 bg-white">
  MaterialUI
</div>
<div class="badge badge-success gap-2">
  NodeJS
</div>
<div class="badge badge-warning gap-2">
  MongoDB
</div>

  </div>

  </div>


  <figure><img src={sum2} alt="summatti"/></figure>

</div>



{/* ;///////////////////////////// */}



{/* ;///////////////////////////// */}




<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">Demystify</a> 2019 
        </h1>   
        
        <p>Facilitating the mainstream adoption of blockchain technology with a product-oriented approach. I worked on their API and Solidity smart contracts.</p>

        <div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2 bg-blue-500">
  Solidity
</div>
<div class="badge badge-error gap-2 bg-white">
  Express
</div>
<div class="badge badge-success gap-2">
  NodeJS
</div>
<div class="badge badge-warning gap-2">
  MongoDB
</div>

  </div>
  </div>


  <figure><img src={demys1} alt="demys1"/></figure>

</div>





{/* ;/////////////////////////////  */}

<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
  <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">Freelance Websites</a>      2018-Present 
        </h1>   
        <p>Fast and responsive websites for local businesses at affordable prices. Built to specification from scratch or via Shopify.</p>
        <div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  React
</div>
<div class="badge badge-success gap-2 bg-green-400">
  Tailwind
</div>
<div class="badge badge-warning gap-2 bg-red-200">
  Bootstrap/MUI/Daisy
</div>
<div class="badge badge-error gap-2 bg-white">
  Vercel
</div>
<div class="badge badge-error gap-2 bg-green-200">
  Shopfiy
</div>
  </div>

  </div>
  <figure><img src={g1} alt="g1"/></figure>
</div>

{/* ;///////////////////////////// */}






{/*  */}


<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
         <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">2D Battle Royale </a>
       2017  </h1>   
        <p>2D Online Multiplayer shooter built with Vanilla HTML/CSS/JS. Fullstack app including user APIs and MongoDB.   </p>
<div class='flex flex-row gap-2 '>

<div class="badge badge-success gap-2 bg-white">
  HTML/CSS/JS
</div>

<div class="badge badge-error gap-2 bg-white">
  Express
</div>
<div class="badge badge-error gap-2 bg-white">
  SQL
</div><div class="badge badge-warning gap-2">
  MongoDB
</div>
  </div>
  </div>
  <figure><img src={game1} alt="Games"/></figure>
</div>
{/* ///////////////// */}

{/*  */}


<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-1xl font-bold">
         <a class=" font-bold text-4xl link link-hover text-blue-400 hover:text-white" href="/project">Flash Game Collection </a>
       2016  </h1>   
        <p>Various flash game projects coded in Python,JS,Java etc. for learning purposes.   </p>
        <div class='flex flex-row gap-2 '>

<div class="badge badge-success gap-2 bg-white">
  HTML/CSS/JS
</div>


<div class="badge badge-error gap-2 bg-white">
  Java
</div>
<div class="badge badge-error gap-2 ">
  Python
</div>
  </div>

  </div>

  <figure><img src={game2} alt="Games"/></figure>
</div>
      </div>
{/* ///////////////// */}


{/* ///////////////// */}

  {/* <div class="divider lg:divider-horizontal">OR</div>  */}

</div>


  
    </div>
  );
}

export default App;
