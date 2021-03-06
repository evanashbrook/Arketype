import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
* @author
* @function Prisms
**/

const Prisms = (props) => {
    let r1 = useRef(null)
    let y1 = useRef(null)
    let g1 = useRef(null)
    let b1 = useRef(null)
    let r2 = useRef(null)
    let y2 = useRef(null)
    let g2 = useRef(null)
    let b2 = useRef(null)
    let d = useRef(null)
    let rr1 = useRef(null)
    let yy1 = useRef(null)
    let gg1 = useRef(null)
    let bb1 = useRef(null)
    let rr2 = useRef(null)
    let yy2 = useRef(null)
    let gg2 = useRef(null)
    let bb2 = useRef(null)

    useEffect(() => {
        gsap.from(d, {opacity: 0, rotate: 180, duration: 1, ease: 'circ', transformOrigin: 'center'})
        gsap.from(r1, {opacity: 0, duration: 1, delay: 1, ease: 'circ'})
        gsap.from(y1, {opacity: 0, xPercent: 30, yPercent:15, duration: 1, delay: 1.33, ease: 'circ'})
        gsap.from(g1, {opacity: 0, xPercent: 30, yPercent:15, duration: 1, delay: 1.66, ease: 'circ'})
        gsap.from(b1, {opacity: 0, xPercent: 30, yPercent:15, duration: 1, delay: 1.99, ease: 'circ'})
        gsap.from(r2, {opacity: 0, duration: 1, delay: 1, ease: 'circ'})
        gsap.from(y2, {opacity: 0, xPercent: -30, yPercent:15, duration: 1, delay: 1.33, ease: 'circ'})
        gsap.from(g2, {opacity: 0, xPercent: -30, yPercent:15, duration: 1, delay: 1.66, ease: 'circ'})
        gsap.from(b2, {opacity: 0, xPercent: -30, yPercent:15, duration: 1, delay: 1.99, ease: 'circ'})

        var tl = gsap.timeline({repeat: -1, repeatDelay: 0, delay: 3})
        tl.to(rr1, {fill: '#ff845c', duration: .25})
        tl.to(rr2, {fill: '#ff845c', duration: .25}, "<")
        tl.to(yy1, {fill: 'rgb(239, 255, 138)', duration: .25})
        tl.to(yy2, {fill: 'rgb(239, 255, 138)', duration: .25}, "<")
        tl.to(gg1, {fill: '#61ff8e', duration: .25})
        tl.to(gg2, {fill: '#61ff8e', duration: .25}, "<")
        tl.to(bb1, {fill: '#78defd', duration: .25})
        tl.to(bb2, {fill: '#78defd', duration: .25}, "<")
        
    })
  return(
    <div>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.12 721.09">
     <g id="Layer_2" data-name="Layer 2">
         <g id="Red" ref={el=>r1=el}>
             <rect x="428.14" y="261.74" width="410.99" height="410.99" transform="translate(-102.55 188.23) rotate(-15.65)" fill="#d0ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect x="513.41" y="326.41" width="334.6" height="334.6" transform="translate(-107.94 201.92) rotate(-15.65)" fill="#ef0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect x="657.54" y="435.71" width="205.49" height="205.49" transform="translate(-117.06 225.04) rotate(-15.65)" fill="#ffd900" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect x="700.18" y="468.05" width="167.3" height="167.3" transform="translate(-119.76 231.88) rotate(-15.65)" fill="#ffbf00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect x="772.7" y="523.05" width="102.33" height="102.33" transform="translate(-124.35 243.51) rotate(-15.65)" fill="#ff6a00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect x="793.94" y="539.15" width="83.31" height="83.31" transform="translate(-125.69 246.92) rotate(-15.65)" fill="#ff4000" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             <rect ref={el=>rr1=el} x="829.82" y="566.37" width="51.16" height="51.16" transform="translate(-127.97 252.68) rotate(-15.65)" fill="red" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
             </g>
             <g id="Yellow" ref={el=>y1=el}>
                 <rect x="301.52" y="190.66" width="410.99" height="410.99" transform="translate(-88.07 151.45) rotate(-15.65)" fill="#00ff95" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect x="386.8" y="255.34" width="334.6" height="334.6" transform="translate(-93.46 165.13) rotate(-15.65)" fill="#00ff51" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect x="530.92" y="364.63" width="205.49" height="205.49" transform="translate(-102.58 188.25) rotate(-15.65)" fill="#5eff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect x="573.56" y="396.97" width="167.3" height="167.3" transform="translate(-105.28 195.09) rotate(-15.65)" fill="#95ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect x="646.09" y="451.97" width="102.33" height="102.33" transform="translate(-109.87 206.73) rotate(-15.65)" fill="#bfff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect x="667.32" y="468.08" width="83.31" height="83.31" transform="translate(-111.22 210.13) rotate(-15.65)" fill="#df0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 <rect ref={el=>yy1=el} x="703.21" y="495.29" width="51.16" height="51.16" transform="translate(-113.49 215.89) rotate(-15.65)" fill="#ff0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                 </g>
                <g id="Green" ref={el=>g1=el}>
                     <rect x="174.83" y="119.44" width="410.99" height="410.99" transform="translate(-73.55 114.63) rotate(-15.65)" fill="#00ffea" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect x="260.11" y="184.11" width="334.6" height="334.6" transform="translate(-78.95 128.31) rotate(-15.65)" fill="#00ffd0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect x="404.23" y="293.41" width="205.49" height="205.49" transform="translate(-88.07 151.44) rotate(-15.65)" fill="#00ffd9" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect x="446.87" y="325.75" width="167.3" height="167.3" transform="translate(-90.77 158.28) rotate(-15.65)" fill="#00ffb2" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect x="519.4" y="380.75" width="102.33" height="102.33" transform="translate(-95.36 169.91) rotate(-15.65)" fill="#00ff84" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect x="540.63" y="396.85" width="83.31" height="83.31" transform="translate(-96.7 173.32) rotate(-15.65)" fill="#00ff48" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     <rect ref={el=>gg1=el} x="576.51" y="424.06" width="51.16" height="51.16" transform="translate(-98.97 179.08) rotate(-15.65)" fill="#51ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                     </g>
                     <g id="Blue" ref={el=>b1=el}>
                         <rect x="48.21" y="48.21" width="410.99" height="410.99" transform="translate(-59.03 77.84) rotate(-15.65)" fill="#80f" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect x="133.49" y="112.89" width="334.6" height="334.6" transform="translate(-64.43 91.52) rotate(-15.65)" fill="#50f" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect x="277.62" y="222.19" width="205.49" height="205.49" transform="translate(-73.55 114.64) rotate(-15.65)" fill="#0037ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect x="320.25" y="254.52" width="167.3" height="167.3" transform="translate(-76.25 121.48) rotate(-15.65)" fill="#006fff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect x="392.78" y="309.53" width="102.33" height="102.33" transform="translate(-80.84 133.12) rotate(-15.65)" fill="#0084ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect x="414.02" y="325.63" width="83.31" height="83.31" transform="translate(-82.18 136.53) rotate(-15.65)" fill="#00c4ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         <rect ref={el=>bb1=el} x="449.9" y="352.84" width="51.16" height="51.16" transform="translate(-84.45 142.28) rotate(-15.65)" fill="aqua" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                         </g>
                         <g id="Red2" ref={el=>r2=el}>
                             <rect x="1081.96" y="261.89" width="410.99" height="410.99" transform="translate(173.79 -329.95) rotate(15.65)" fill="#d0ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect x="1073.07" y="326.56" width="334.6" height="334.6" transform="translate(179.19 -316.27) rotate(15.65)" fill="#ef0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect x="1061.05" y="435.86" width="205.49" height="205.49" transform="matrix(0.96, 0.27, -0.27, 0.96, 188.31, -293.15)" fill="#ffd900" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect x="1053.61" y="468.19" width="167.3" height="167.3" transform="translate(191.01 -286.31) rotate(15.65)" fill="#ffbf00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect x="1046.05" y="523.2" width="102.33" height="102.33" transform="translate(195.6 -274.67) rotate(15.65)" fill="#ff6a00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect x="1043.84" y="539.3" width="83.31" height="83.31" transform="translate(196.94 -271.27) rotate(15.65)" fill="#ff4000" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             <rect ref={el=>rr2=el} x="1040.1" y="566.51" width="51.16" height="51.16" transform="translate(199.21 -265.51) rotate(15.65)" fill="red" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                             </g>
                             <g id="Yellow2" ref={el=>y2=el}>
                                 <rect x="1208.61" y="190.66" width="410.99" height="410.99" transform="translate(159.28 -366.76) rotate(15.65)" fill="#00ff95" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect x="1199.73" y="255.33" width="334.6" height="334.6" transform="translate(164.67 -353.08) rotate(15.65)" fill="#00ff51" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect x="1184.71" y="364.63" width="205.49" height="205.49" transform="translate(173.79 -329.95) rotate(15.65)" fill="#5eff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect x="1180.26" y="396.97" width="167.3" height="167.3" transform="translate(176.49 -323.11) rotate(15.65)" fill="#95ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect x="1172.7" y="451.97" width="102.33" height="102.33" transform="translate(181.08 -311.48) rotate(15.65)" fill="#bfff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect x="1170.49" y="468.08" width="83.31" height="83.31" transform="translate(182.42 -308.07) rotate(15.65)" fill="#df0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 <rect ref={el=>yy2=el} x="1166.75" y="495.29" width="51.16" height="51.16" transform="translate(184.7 -302.31) rotate(15.65)" fill="#ff0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                 </g>
                                 <g id="Green2" ref={el=>g2=el}>
                                     <rect x="1338.27" y="119.44" width="410.99" height="410.99" transform="matrix(0.96, 0.27, -0.27, 0.96, 144.76, -403.56)" fill="#00ffea" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect x="1329.38" y="184.11" width="334.6" height="334.6" transform="matrix(0.96, 0.27, -0.27, 0.96, 150.15, -389.88)" fill="#00ffd0" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect x="1311.36" y="293.41" width="205.49" height="205.49" transform="translate(159.28 -366.76) rotate(15.65)" fill="#00ffd9" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect x="1309.92" y="325.75" width="167.3" height="167.3" transform="matrix(0.96, 0.27, -0.27, 0.96, 161.97, -359.92)" fill="#00ffb2" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect x="1299.36" y="380.75" width="102.33" height="102.33" transform="translate(166.56 -348.28) rotate(15.65)" fill="#00ff84" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect x="1297.15" y="396.85" width="83.31" height="83.31" transform="translate(167.91 -344.87) rotate(15.65)" fill="#00ff48" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     <rect ref={el=>gg2=el} x="1293.41" y="424.06" width="51.16" height="51.16" transform="translate(170.18 -339.12) rotate(15.65)" fill="#51ff00" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                     </g>
                                     <g id="Blue2" ref={el=>b2=el}>
                                         <rect x="1465.92" y="48.21" width="410.99" height="410.99" transform="matrix(0.96, 0.27, -0.27, 0.96, 130.24, -440.36)" fill="#80f" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect x="1453.03" y="112.89" width="334.6" height="334.6" transform="translate(135.64 -426.68) rotate(15.65)" fill="#50f" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect x="1438.01" y="222.19" width="205.49" height="205.49" transform="translate(144.76 -403.56) rotate(15.65)" fill="#0037ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect x="1433.57" y="254.52" width="167.3" height="167.3" transform="translate(147.46 -396.72) rotate(15.65)" fill="#006fff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect x="1426.01" y="309.53" width="102.33" height="102.33" transform="translate(152.05 -385.08) rotate(15.65)" fill="#0084ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect x="1423.8" y="325.63" width="83.31" height="83.31" transform="translate(153.39 -381.68) rotate(15.65)" fill="#00c4ff" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         <rect ref={el=>bb2=el} x="1420.06" y="352.84" width="51.16" height="51.16" transform="translate(155.66 -375.92) rotate(15.65)" fill="aqua" stroke="#9a9c9b" stroke-miterlimit="10" stroke-width="0.65"/>
                                         </g>
                                         <g id="Layer_1-2" data-name="Layer 1" ref={el=>d=el}>
                                             <line x1="960.4" y1="534.89" x2="1034.15" y2="608.64" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <line x1="886.66" y1="608.64" x2="960.4" y2="534.89" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <line x1="960.4" y1="682.38" x2="886.66" y2="608.64" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <line x1="1034.15" y1="608.64" x2="960.4" y2="682.38" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M944.24,628.07l87.91-19.51" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M888.68,609.05l55.56,19" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M976.43,588.39,888.7,608.54" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M1032.15,608.51l-55.72-20.12" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M944.24,628.07l16-92.07" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M959.94,680.33l-15.7-52.26" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M976.43,588.39l-15.66,91.92" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             <path d="M960.7,536l15.73,52.42" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.03"/>
                                             </g>
                                             </g>
                                             
                                                 <g id="Layer_14" data-name="Layer 14">
                                                     <rect width="1504.14" height="564.49" fill="#fff" opacity="0.29" transform="translate(200 150)"/>
                                                </g>
                                             </svg>

    </div>
   )

 }

export default Prisms