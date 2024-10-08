import Image from "next/image";
import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StartIcon from '@/assets/icons/star.svg'
import SparkelIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from "@/components/HeroOrbit";


export const HeroSection = () => {
  return <div id="Home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:liner-gradient(circle,#000_10%,transparent_80%)]">
      {/* Green Grain Image as Background   */}
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      {/* Outer ring render  */}
      <div className="size-[620px] hero-ring" ></div>
      <div className="size-[820px] hero-ring" ></div>
      <div className="size-[1020px] hero-ring" ></div>
      <div className="size-[1220px] hero-ring" ></div>
      {/* Orbit Start,Sparkel,Round Rendering  */}
      <HeroOrbit size={430} rotation={-10} shouldOrbit={true} orbitDuration="30s" shouldSpin={true} spinDuration="3s">
        <SparkelIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit={true} orbitDuration="32s" shouldSpin={true} spinDuration="3s">
        <SparkelIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-40} shouldOrbit={true} orbitDuration="34s" shouldSpin={true} spinDuration="6s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration="36s" shouldSpin={true} spinDuration="6s">
        <StartIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={178} shouldOrbit={true} orbitDuration="38s" shouldSpin={true} spinDuration="3s">
        <SparkelIcon className="size-11 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={89} shouldOrbit={true} orbitDuration="40s" shouldSpin={true} spinDuration="6s">
        <StartIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration="42s" shouldSpin={true} spinDuration="6s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit={true} orbitDuration="44s" shouldSpin={true} spinDuration="3s">
        <SparkelIcon className="size-16 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit={true} orbitDuration="46s" shouldSpin={true} spinDuration="6s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration="48s" shouldSpin={true} spinDuration="6s">
        <StartIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    </div>

    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Boy Peeking from behind laptop" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative ">
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Aftab Pathan</h1>
        {/* <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1> */}
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming design into functional, high-Performance web application. Let's discuss your next project.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="#Projects" style={{ zIndex: 10 }}>
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
            <span className="font-semibold">Explore My work</span>
            <ArrowDown className="size-4" />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/aftabpathan313" target="_blank" style={{ zIndex: 10 }}>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </a>
      </div>
    </div>
  </div>;
};
