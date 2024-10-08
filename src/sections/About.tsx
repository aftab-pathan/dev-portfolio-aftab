'use client'

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import bookImg from "@/assets/images/book-cover.png"
import mapImg from "@/assets/images/map.png"
import emojiSmile from "@/assets/images/memoji-smile.png"
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion"
import { useRef } from "react";

const toolBoxItemsList = [
  { title: 'Javascript', iconType: JavaScriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'Github', iconType: GithubIcon },
]

const hobbies = [
  { title: 'Paininting', emoji: '🎨', left: "5%", top: "5%" },
  { title: 'Photography', emoji: '📷', left: "10%", top: "35%" },
  { title: 'Cricket', emoji: '🏏', left: "50%", top: "5%" },
  { title: 'Gaming', emoji: '🎮', left: "45%", top: "70%" },
  { title: 'Reading', emoji: '📚', left: "35%", top: "40%" },
  { title: 'Fitness', emoji: '💪', left: "70%", top: "45%" },
  { title: 'Traveling', emoji: '✈️', left: "5%", top: "65%" },
]

export const AboutSection = () => {
  const boundrayRef = useRef(null)

  return (
    <div id="About" className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World!"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspactive." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImg} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader className="" title="My Toolbox" description="Explore the trchnologies and tools I use to craft exceptional digital experience." />
              <ToolboxItems items={toolBoxItemsList} className="" itemsWraperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolBoxItemsList} className="mt-6" itemsWraperClassName="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader className="px-6 py-6" title="Beyond the code" description="Explore my intrest and hobbies beyond the digital realm." />
              <div className="relative flex-1" ref={boundrayRef}>
                {hobbies.map(hobbie => (
                  <motion.div
                    key={hobbie.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobbie.left, top: hobbie.top }}
                    drag
                    dragConstraints={boundrayRef}
                  >
                    <span className="font-medium text-gray-950">{hobbie.title}</span>
                    <span className="">{hobbie.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImg} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={emojiSmile} alt="smilimg Emoji" className="size-20  " />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
