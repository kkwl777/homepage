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
import c1 from './c1.jpg' 
import c2 from './c2.jpg' // Victoria Naumenko 
import m1 from './m1.jpg' // John Rodenn Castillo 
import ss from './6.png' 


function App() {
  SwiperCore.use([Autoplay])

  return (
    <div className="App">


<div class="flex flex-col w-full   lg:flex-row" style={{height:'100%'}}>
  <div style={{width:'42%'}}> 
  <Swiper
      autoplay={{ delay: 10000 }} 
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{height:'100%'}}
    >
            <SwiperSlide> <img src={m1} class="w-full h-full" /></SwiperSlide>
            <SwiperSlide> <img src={c1} class="w-full h-full" /></SwiperSlide>
            <SwiperSlide> <img src={f1} class="w-full h-full" /></SwiperSlide>

      <SwiperSlide >    <img src={f3} class="w-full h-full" /></SwiperSlide>
      <SwiperSlide> <img src={f2} class="w-full h-full" /></SwiperSlide>
      <SwiperSlide> <img src={a1} class="w-full h-full" /></SwiperSlide>
      <SwiperSlide> <img src={c2} class="w-full h-full" /></SwiperSlide>

    </Swiper> 
    </div>
  <div style={{width:'58%'}}>  
  

        {/* Main port; right side */}

    {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" /> */}
    <div class="  w-9/10 bg-base-0  "  >
  <div class="card-body text-center ">
  <h1 class="text-7xl font-bold">
  98  <a class=" font-bold text-7xl link link-hover text-blue-600 hover:text-white" href="/project">Spheals</a>
        </h1>   
        
        <h1 class="text-3xl font-bold">Software Engineer</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>




  </div>


</div>



{/* <div class="card w-9/10 bg-base-0 ">
  <div class="card-body">
  <h1 class="text-5xl font-bold">
          Welcome to <a class=" font-bold text-5xl link link-hover text-blue-600 hover:text-white" href="/project">Next.js!</a>
        </h1>
            <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button class="btn btn-outline btn-primary">Button</button>
    </div>
  </div>
</div> */}
<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-5xl font-bold">
          Welcome to <a class=" font-bold text-5xl link link-hover text-blue-600 hover:text-white" href="/project">Next.js!</a>
        </h1>   
        
        <h1 class="text-3xl font-bold">Hello there</h1>
        <h1 class="text-3xl font-bold">Hello there</h1>
        <h1 class="text-3xl font-bold">Hello there</h1>

    <div class="card-actions justify-end">
    <button class="btn btn-outline btn-primary">Button</button>
    </div>
  </div>
  <figure><img src={ss} alt="Album"/></figure>

</div>

<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-5xl font-bold">
          Welcome to <a class=" font-bold text-5xl link link-hover text-blue-600 hover:text-white" href="/project">Next.js!</a>
        </h1>   
        
        <p>Hello there asdsadadadasdasdas ssssssssssssssssssssssss ssssssssssssssssssss sssssssssssssssss sssssssssssssssss 
          sssssssssssssssss sssssssssssssssssssssssssssssssss ssssssssssssss ssssssssssssssssssssss sssssssssssssssssssss sssssssssss sssssssssss ssssss  </p>

<div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  info
</div>
<div class="badge badge-success gap-2">
  success
</div>
<div class="badge badge-warning gap-2">
  warning
</div>
<div class="badge badge-error gap-2">
  error
</div>
  </div>

  </div>


  <figure><img src={ss} alt="Preview"/></figure>

</div>





<div class="card lg:card-side bg-base-0 ">
  <div class="card-body text-left ">
  <h1 class="text-5xl font-bold">
          Welcome to <a class=" font-bold text-5xl link link-hover text-blue-600 hover:text-white" href="/project">Next.js!</a>
        </h1>   
        
        <p>Hello there asdsadadadasdasdas ssssssssssssssssssssssss ssssssssssssssssssss sssssssssssssssss sssssssssssssssss 
          sssssssssssssssss sssssssssssssssssssssssssssssssss ssssssssssssss ssssssssssssssssssssss sssssssssssssssssssss sssssssssss sssssssssss ssssss  </p>

<div class='flex flex-row gap-2 '>
<div class="badge badge-info gap-2">
  info
</div>
<div class="badge badge-success gap-2">
  success
</div>
<div class="badge badge-warning gap-2">
  warning
</div>
<div class="badge badge-error gap-2">
  error
</div>
  </div>

  </div>


  <figure><img src={ss} alt="Preview"/></figure>

</div>


      </div>


  {/* <div class="divider lg:divider-horizontal">OR</div>  */}

</div>


  
    </div>
  );
}

export default App;
