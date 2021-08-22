import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
* @author
* @function Linestop
**/

export const Linestop = (props) => {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580.54 279">
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_3" data-name="Layer 3">
            <path ref={el=>p1=el}
                d="M.41,87.7c32.14-21.79,48.78,5.5,86.79-4S194.5,47.82,229.18,71c21.56,14.4,68.08,58.95,90,72.88,30.43,19.32,44.55,30.87,80.82,33.5,41.37,3,108.79-64.94,138.64-91.93"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p2=el}
                d="M8.49,81.7C39.61,60.6,57,84.6,94,76.14c13.78-3.15,31.29-8,49.62-11.76,32.51-6.74,67.41-9.68,90.11,3.91,23.43,14,69.25,55.81,92.08,70.46,30.1,19.25,45.23,30.38,79.8,36.17,43.51,7.29,107.35-46.19,136.84-72.13"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p3=el}
                d="M16.58,75.7c30.1-20.42,48.3.34,84.18-7.1,13.86-2.87,31.12-6.87,49-9.77,31.77-5.15,65.29-5.68,88.45,6.76,25.35,13.61,70.43,52.66,94.14,68,29.78,19.18,46,30.36,78.78,38.84,45.92,11.89,105.92-27.44,135.05-52.34"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p4=el}
                d="M24.67,69.7C53.74,50,72.74,67.5,107.54,61.06c13.95-2.57,30.94-5.78,48.44-7.79,31-3.56,63.23-1.73,86.79,9.62,27.32,13.15,71.57,49.55,96.2,65.6,29.41,19.17,46.8,30.76,77.77,41.52,48.46,16.83,104.48-8.7,133.24-32.55"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p5=el}
                d="M32.75,63.71C60.81,44.66,80.61,59,114.33,53.52c14-2.27,30.75-4.69,47.84-5.8,30.27-2,61.2,2.15,85.13,12.46,29.32,12.64,72.74,46.42,98.25,63.18,29.09,19.11,47.56,31.5,76.76,44.19,51,22.16,103.05,10,131.44-12.75"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p6=el}
                d="M40.84,57.71c27-18.37,47.66-7.2,80.27-11.72a379.94,379.94,0,0,1,47.24-3.82c29.54-.39,59.22,6,83.48,15.31,31.36,12.06,73.91,43.27,100.31,60.76,28.76,19,48.22,32.48,75.74,46.85,53.43,27.88,101.62,28.81,129.64,7"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p7=el}
                d="M48.92,51.71c26-17.68,47.46-9.64,79-13.26a301.75,301.75,0,0,1,46.65-1.84c28.79,1.2,57.24,9.76,81.82,18.16,33.43,11.43,75.08,40.13,102.37,58.34,28.44,19,48.78,33.66,74.73,49.52,55.63,34,100.18,47.56,127.84,26.84"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p8=el}
                d="M57,45.71c25-17,47.26-12.05,77.66-14.8a245.51,245.51,0,0,1,46.06.15c28.05,2.79,55.27,13.49,80.16,21,35.51,10.72,76.26,37,104.43,55.91s49.21,35,73.71,52.19c57.54,40.45,98.74,66.31,126,46.63"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p9=el}
                d="M65.09,39.71c24-16.31,47.07-14.43,76.36-16.34a205.65,205.65,0,0,1,45.47,2.13c27.3,4.38,53.3,17.2,78.5,23.87,37.6,9.94,77.47,33.77,106.49,53.48,27.83,18.76,49.53,36.34,72.69,54.86,59.09,47.24,97.31,85.06,124.24,66.43"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p10=el}
                d="M73.18,33.72c23-15.63,46.87-16.8,75-17.89A174.81,174.81,0,0,1,193.1,20c26.56,6,51.34,20.86,76.85,26.71,39.69,9.11,78.64,30.62,108.55,51.06,27.5,18.69,49.73,37.75,71.68,57.53,60.23,54.29,95.87,103.81,122.44,86.23"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p11=el}
                d="M81.26,27.72C103.2,12.77,127.94,8.6,155,8.29a152.27,152.27,0,0,1,44.28,6.1C225.11,22,248.66,38.89,274.48,44c41.79,8.2,79.82,27.47,110.61,48.63,27.18,18.62,49.82,39.16,70.66,60.21,61,61.56,94.44,122.56,120.64,106"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
            <path ref={el=>p12=el}
                d="M89.35,21.72C122.09-.6,166.19-5.49,205.48,8.84,230.55,18,252.87,37,279,41.26,475,73.54,536.1,302.58,580.16,276.15"
                fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-miterlimit="10" stroke-width="1.46" />
        </g>
    </g>
</svg>
    </div>
   )

 }