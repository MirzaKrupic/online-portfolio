import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from './canvas';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { mirza } from "../assets";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {


  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className={`${styles.paddingX} inset-0 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#914eff]">Mirza</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a <span><Typewriter
            words={['Frontend Developer', 'Backend Developer', 'tester', 'lecturer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></p>
          
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <img src={ mirza } alt="Mirza Cartoon" style={{maxWidth: "300px"}} />
    </section>
  )
}

export default SectionWrapper(Hero, "hero")