import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * @author
 * @function Diamond
 **/

const Diamond = (props) => {
    let c1 = useRef(null)
    let c2 = useRef(null)
    let s = useRef(null)

    useEffect(() => {
        gsap.from(s, {rotation: 360, duration: 1, ease: 'circ', transformOrigin: 'center'})
        gsap.from(c1, {opacity:0, duration: .5, ease: 'circ', transformOrigin: 'center'})
        gsap.from(c1, {rotation: 360, duration: 2, delay: .5, ease: 'circ', transformOrigin: 'center', repeat: -1, repeatDelay: 0})
        gsap.from(c2, {opacity:0, duration: .5, ease: 'circ', transformOrigin: 'center'})

    })
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 159.41 159.41"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            y1="79.71"
            x2="158.91"
            y2="79.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#a7a9ac" />
            <stop offset="1" stop-color="#414042" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2" ref={el=>s=el}>
          <g id="Layer_2-2" data-name="Layer 2">
            <circle ref={el=>c2=el}
              cx="79.71"
              cy="79.71"
              r="79.21"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-miterlimit="10"
              stroke-width="3"
              fill="none"
            />
            <line
              x1="80.02"
              y1="29"
              x2="130.44"
              y2="79.42"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <line
              x1="29.6"
              y1="79.42"
              x2="80.02"
              y2="29"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <line
              x1="80.02"
              y1="129.84"
              x2="29.6"
              y2="79.42"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <line
              x1="130.44"
              y1="79.42"
              x2="80.02"
              y2="129.84"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M69,92.71l60.11-13.34"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M31,79.71l38,13"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M91,65.58,31,79.35"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M129.08,79.33,91,65.58"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M69,92.71l11-62.95"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M79.71,128.44,69,92.71"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M91,65.58,80.27,128.42"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              d="M80.22,29.74,91,65.58"
              fill="#fff"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <circle ref={el=>c1=el}
              cx="79.92"
              cy="79.71"
              r="62.43"
              fill="none"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-miterlimit="10"
              stroke-width="3"
              stroke-dasharray="12.26 12.26"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Diamond;
