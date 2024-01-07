import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from './canvas';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { mirza } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex mt-[120px] items-center justify-center">
      <div className={`${styles.paddingX} inset-0 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#914eff]">Mirza</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am web developer that develops <br className="block md:hidden"/> both front-end and back-end.</p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <img src={ mirza } alt="Mirza Cartoon" style={{maxWidth: "300px"}} />
    </section>
  )
}

export default SectionWrapper(Hero, "hero")