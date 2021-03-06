import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
* @author
* @function linesleft
**/

const LinesL = (props) => {
    let p1 = useRef(null)
    let p2 = useRef(null)
    let p3 = useRef(null)
    let p4 = useRef(null)
    let p5 = useRef(null)
    let p6 = useRef(null)
    let p7 = useRef(null)
    let p8 = useRef(null)
    let p9 = useRef(null)
    let p10 = useRef(null)
    let p11 = useRef(null)
    let p12 = useRef(null)

    useEffect(() => {
        gsap.from(p1, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p2, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p3, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p4, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p5, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p6, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p7, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p8, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p9, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p10, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p11, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
        gsap.from(p12, {drawSVG: 0, delay: 1.5, duration:3, ease:"circ"})
    })
  return(
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.08 628.33">
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_3" data-name="Layer 3">
            <path ref={el=>p1=el}
                d="M327.93,4.33C271.47,17.4,183.81,70.66,161.84,115.07,117,205.75,123.7,264.29,131.44,365.16c8.15,106.25,97.64,162,99,263.16"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p2=el}
                d="M312.83,4C256.66,16.63,174.3,70.22,152.88,115c-43.7,91.16-24.09,137.33-16.27,238.2,8.2,105.75,71.58,172.08,73,273.24"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p3=el}
                d="M297.73,3.66C241.85,15.85,164.79,69.78,143.91,114.83c-42.53,91.64-10,125.44-2.14,226.3C150,446.39,187.3,523.3,188.68,624.46"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p4=el}
                d="M282.63,3.33C227,15.07,155.28,69.33,134.94,114.71c-41.36,92.13,4,113.56,12,214.41,8.29,104.76,19.47,192.25,20.85,293.41"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p5=el}
                d="M267.53,3C212.23,14.29,145.77,68.89,126,114.59,85.78,207.2,144,216.26,152.11,317.1c8.33,104.27-6.59,202.34-5.21,303.5"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p6=el}
                d="M252.44,2.66C197.42,13.51,136.25,68.45,117,114.47c-39,93.09,32.12,89.78,40.27,190.62C165.66,408.86,124.64,517.5,126,618.67"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p7=el}
                d="M237.34,2.33C182.61,12.73,126.74,68,108,114.35c-37.85,93.57,46.17,77.89,54.41,178.73,8.43,103.27-58.69,222.49-57.32,323.65"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p8=el}
                d="M222.24,2c-54.44,10-105,65.56-123.18,112.24-36.69,94,60.22,66,68.55,166.82,8.47,102.78-84.75,232.58-83.38,333.74"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p9=el}
                d="M207.14,1.66c-54.15,9.51-99.42,65.46-117,112.46-35.52,94.53,74.27,54.1,82.68,154.93C181.29,371.33,62,511.71,63.35,612.87"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p10=el}
                d="M192,1.33C138.18,10.39,98.21,66.67,81.12,114c-34.35,95,88.33,42.22,96.82,143C186.51,358.82,41.08,509.78,42.46,610.94"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p11=el}
                d="M176.94,1C123.37,9.62,88.7,66.23,72.15,113.88,39,209.37,174.53,144.21,183.11,245,191.72,346.31,20.19,507.85,21.57,609"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
            <path ref={el=>p12=el}
                d="M161.84.66c-53.28,8.18-82.66,65.13-98.66,113.1-32,96,116.43,18.44,125.09,119.24S-.7,505.91.68,607.08"
                fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-miterlimit="10" stroke-width="1.34" />
        </g>
    </g>
</svg>
    </div>
   )

 }

 export default LinesL