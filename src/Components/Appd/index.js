import React, { useEffect } from 'react'
import gsap from 'gsap'
import { DrawSVGPlugin}  from 'gsap/DrawSVGPlugin'
import { MorphSVGPlugin}  from 'gsap/MorphSVGPlugin'
import Wave1 from '../../SVGs/wave1'
import b2bd from '../../Assets/SVG/block2bckrnd.svg'
import './style.css'
import Prisms from '../../SVGs/Prisms'
import title from '../../Assets/SVG/Dyalectyc.svg'
import lines from '../../Assets/SVG/Lines.svg'
import Block0 from '../Block0'
import Block1 from '../Block1'

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

/**
* @author
* @function Appd
**/

const Appd = (props) => {
  return(
    <section>
        <div className="block0div">
        <Block0 />
        </div>
    </section>
   )

 }

export default Appd