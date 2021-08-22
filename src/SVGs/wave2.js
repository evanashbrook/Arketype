import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'


/**
* @author
* @function Wave2
**/

const Wave2 = (props) => {
    let w1 = useRef(null)
    let w2 = useRef(null)

    useEffect(() => {
        gsap.from(w1, {morphSVG: w2, duration: 3, repeat:-1})
        gsap.from(w2, {morphSVG: w1, duration: 3, repeat:-1})
    })
  return(
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623.37 433.97"><g id="Layer_2" data-name="Layer 2"><g ref={el=>w2=el}id="Layer_1-2" data-name="Layer 1"><path d="M15.3,98.84C29.36,72.89,45,47.12,66.58,31.35,107.87,1.15-7.57,402.28,33.85,432.19S154.4-20.81,317,153.43c32,34.3,73.1,53.88,114.32,64.15s85,7.06,123.81-13.15C580.94,191,604.31,170.25,623,144.15" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M14.94,103.81C29,77.86,44.66,52.08,66.22,36.31c41.29-30.19-70,361.49-28.62,391.4s120-443.34,279.75-270.34c35.32,38.26,74.66,43,116.48,55.13,42,12.33,82.12,17.1,121-3.1C580.58,196,604,175.22,622.65,149.11" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M14.57,108.78c14.06-26,29.73-51.73,51.29-67.5,41.28-30.19-65.92,352-24.5,381.94S160.65-10.29,317.67,161.32c38.64,42.22,76.27,32,118.65,46.1,42.74,14.25,79.26,27.15,118.11,6.94,25.79-13.41,49.16-34.17,67.85-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M14.21,113.74C28.27,87.79,43.93,62,65.49,46.25,106.78,16.05,3.7,388.84,45.12,418.74S163.57-4.83,318,165.26c41.94,46.19,77.85,21,120.81,37.08,43.5,16.25,76.41,37.2,115.25,17,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M13.85,118.71C27.9,92.76,43.57,67,65.13,51.21,106.42,21,7.46,384.35,48.88,414.26S166.39.72,318.33,169.21c45.24,50.16,79.44,10.07,123,28,44.26,18.27,73.56,47.25,112.4,27.05,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M13.48,123.68c14.06-26,29.73-51.73,51.29-67.5C106.05,26,11.22,379.87,52.64,409.78s116.49-403.43,266-236.63c48.53,54.15,81-.86,125.14,19,45,20.28,70.69,57.3,109.54,37.09,25.79-13.41,49.15-34.17,67.85-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M13.12,128.64C27.18,102.69,42.84,76.92,64.4,61.15,105.69,31,15,375.39,56.4,405.29S171.81,12,319,177.1c51.82,58.12,82.61-11.79,127.3,10,45.77,22.3,67.84,67.35,106.68,47.14,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M12.75,133.61c14.06-26,29.73-51.73,51.29-67.49,41.29-30.2-45.31,304.79-3.89,334.69S174.44,17.76,319.31,181c55.11,62.12,84.2-22.7,129.47,1,46.53,24.33,65,77.4,103.83,57.2,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M12.39,138.58c14.06-26,29.72-51.73,51.29-67.5,41.28-30.19-41.19,295.34.23,325.25S177,23.53,319.64,185c58.39,66.11,85.78-33.63,131.63-8.07,47.29,26.36,62.13,87.45,101,67.24C578,230.75,601.4,210,620.1,183.88" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M12,143.54c14.06-25.95,29.72-51.72,51.28-67.49,41.29-30.2-37.06,285.89,4.36,315.8S179.58,29.34,320,188.94c61.67,70.1,87.36-44.54,133.79-17.1,48.05,28.4,59.28,97.5,98.12,77.29C577.67,235.71,601,215,619.74,188.85" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M11.66,148.51C25.72,122.56,41.39,96.78,63,81,104.24,50.82,30,357.46,71.43,387.36S182.1,35.16,320.3,192.88c64.93,74.11,88.94-55.45,136-26.12,48.81,30.43,56.43,107.54,95.27,87.34,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M11.3,153.48C25.36,127.53,41,101.75,62.58,86c41.29-30.19-28.81,267,12.61,296.9S184.6,41,320.62,196.83c68.21,78.12,90.53-66.36,138.13-35.16,49.55,32.49,53.56,117.6,92.4,97.39,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M10.94,158.44C25,132.49,40.66,106.72,62.22,91c41.29-30.2-24.7,257.54,16.72,287.45S187.07,46.88,321,200.77c71.46,82.14,92.1-77.26,140.29-44.18C511.54,191.12,512,284.24,550.79,264c25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M10.57,163.41c14.06-25.95,29.73-51.73,51.29-67.49,41.28-30.2-20.58,248.09,20.84,278S189.53,52.77,321.28,204.72C396,290.88,415,116.56,463.73,151.51c51,36.58,47.85,137.69,86.7,117.49,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M10.21,168.38c14.06-25.95,29.72-51.73,51.28-67.5,41.29-30.19-16.45,238.65,25,268.55S192,58.67,321.61,208.66c77.95,90.19,95.24-99,144.61-62.24,51.8,38.64,45,147.75,83.84,127.54,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M9.85,173.34c14.05-26,29.72-51.72,51.28-67.49C102.42,75.65,48.8,335.05,90.22,365S194.4,64.59,321.94,212.61c81.18,94.22,96.81-110,146.77-71.27,52.54,40.69,42.15,157.8,81,137.59,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M9.48,178.31c14.06-25.95,29.73-51.73,51.29-67.49C102.05,80.62,52.56,330.56,94,360.47s102.83-290,228.28-143.92c84.42,98.27,98.39-120.84,148.94-80.29C524.49,179,510.49,304.1,549.34,283.9c25.79-13.42,49.15-34.18,67.85-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M9.12,183.28c14.06-25.95,29.72-51.73,51.28-67.5C101.69,85.59,56.32,326.08,97.74,356S199.21,76.45,322.59,220.5c87.64,102.31,100-131.74,151.11-89.32,54,44.79,36.43,177.89,75.27,157.68,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M8.75,188.24c14.06-26,29.73-51.72,51.29-67.49,41.29-30.2,0,200.85,41.45,230.75S201.6,82.39,322.92,224.44c90.85,106.38,101.52-142.63,153.27-98.35C531,173,509.77,314,548.61,293.83c25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M8.39,193.21c14.06-26,29.72-51.73,51.29-67.49C101,95.52,63.83,317.12,105.25,347S204,88.34,323.25,228.39C417.3,338.82,426.33,74.87,478.68,121c55.5,48.92,30.72,198,69.57,177.79,25.79-13.42,49.15-34.18,67.85-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M8,198.18c14.06-26,29.72-51.73,51.28-67.5,41.29-30.19,8.28,182,49.7,211.86S206.36,94.3,323.58,232.33c97.24,114.51,104.64-164.41,157.59-116.4,56.24,51,27.87,208,66.71,187.83,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M7.66,203.14C21.72,177.19,37.39,151.42,59,135.65c41.29-30.19,12.4,172.5,53.82,202.41s96-237.8,211.13-101.78C424.33,354.87,430.11,61,483.66,110.84c57,53,25,218.1,63.86,197.89,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M7.3,208.11c14.06-26,29.72-51.73,51.28-67.49,41.29-30.2,16.53,163.05,58,193s94.55-227.35,207.7-93.35C427.83,362.9,432,54,486.15,105.76c57.7,55.11,22.16,228.14,61,207.94,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M6.94,213.08c14.06-26,29.72-51.73,51.28-67.5,41.29-30.19,20.64,153.61,62.06,183.51s93.16-216.88,204.28-84.92C431.31,371,433.88,47.1,488.65,100.68c58.43,57.17,19.3,238.19,58.14,218,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M6.57,218c14.06-25.95,29.73-51.72,51.29-67.49C99.14,120.36,82.62,294.71,124,324.61s91.74-206.43,200.85-76.49C434.79,379,435.77,40.16,491.14,95.6c59.16,59.23,16.44,248.24,55.29,228,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M6.21,223c14.06-25.95,29.72-51.73,51.28-67.49,41.29-30.2,28.89,134.7,70.31,164.61s90.33-196,197.42-68.07c113,135,112.43-218.84,168.41-161.55,59.89,61.3,13.59,258.29,52.43,238.09,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M5.85,228C19.9,202,35.57,176.25,57.13,160.48c41.29-30.19,33,125.26,74.43,155.17s88.9-185.5,194-59.64c116.17,139.13,114-229.73,170.58-170.58,60.62,63.36,10.74,268.34,49.58,248.13,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M5.48,232.94C19.54,207,35.21,181.22,56.77,165.45c41.28-30.19,37.13,115.81,78.55,145.71s87.48-175,190.55-51.21C445.15,403.22,441.41,19.34,498.61,80.35c61.34,65.43,7.88,278.39,46.73,258.18,25.79-13.42,49.15-34.18,67.85-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M5.12,237.91C19.18,212,34.84,186.18,56.4,170.42c41.29-30.2,41.26,106.36,82.68,136.26s86-164.55,187.12-42.78C448.57,411.32,443.29,12.4,501.1,75.27c62.07,67.49,5,288.43,43.87,268.23,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M4.76,242.88c14.05-25.95,29.72-51.73,51.28-67.5,41.29-30.19,45.37,96.91,86.79,126.82s84.62-154.07,183.7-34.36C452,419.43,445.17,5.46,503.6,70.18c62.78,69.56,2.17,298.49,41,278.28,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M4.39,247.84c14.06-26,29.72-51.72,51.29-67.49,41.28-30.19,49.49,87.46,90.91,117.37s83.18-143.59,180.27-25.93C455.37,427.55,447.05-1.48,506.09,65.1c63.51,71.63-.69,308.54,38.16,288.33C570,340,593.4,319.25,612.1,293.15" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M4,252.81c14.06-25.95,29.72-51.73,51.28-67.49,41.29-30.2,53.62,78,95,107.91s81.74-133.1,176.83-17.5C458.75,435.68,448.93-8.42,508.58,60c64.23,73.69-3.54,318.58,35.3,298.38C569.67,345,593,324.22,611.74,298.11" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M3.66,257.78c14.06-25.95,29.73-51.73,51.29-67.5,41.29-30.19,57.74,68.57,99.16,98.47s80.3-122.62,173.4-9.07c134.59,164.15,123.3-295,183.56-224.75,64.95,75.77-6.39,328.64,32.45,308.43,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M3.3,262.74C17.36,236.79,33,211,54.58,195.25c41.29-30.19,61.87,59.11,103.29,89s78.85-112.14,170-.64C465.44,452,452.68-22.3,513.56,49.85c65.67,77.83-9.25,338.69,29.59,318.48,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M2.94,267.71C17,241.76,32.66,216,54.22,200.22c41.29-30.2,66,49.66,107.4,79.57S239,178.13,328.17,287.57C468.76,460.18,454.43-29.13,516.05,44.77c66.25,80-12.1,348.73,26.74,328.53C568.58,359.88,592,339.12,610.65,313" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M2.57,272.68c14.06-26,29.73-51.73,51.29-67.5C95.15,175,124,245.4,165.38,275.3s76-91.16,163.12,16.22c143.56,176.85,127.82-327.61,190-251.83,67,82.06-15,358.78,23.88,338.57,25.79-13.41,49.16-34.17,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M2.21,277.64c14.06-25.95,29.72-51.72,51.28-67.49,41.29-30.19,74.23,30.77,115.65,60.67s74.5-80.67,159.68,24.64C475.33,476.59,458.21-43,521,34.6c67.72,84.12-17.82,368.84,21,348.63,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M1.85,282.61c14.05-25.95,29.72-51.73,51.28-67.49,41.29-30.2,78.35,21.31,119.77,51.22s73-70.19,156.25,33.07C478.58,484.82,460.1-50,523.53,29.52,592,115.69,502.86,408.4,541.7,388.2c25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M1.48,287.58c14.06-25.95,29.73-51.73,51.29-67.5,41.28-30.19,82.47,11.87,123.89,41.78s71.58-59.7,152.82,41.49C481.8,493.08,462-56.95,526,24.44c69.2,88.22-23.53,388.93,15.32,368.72,25.79-13.41,49.15-34.17,67.85-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M1.12,292.54c14.06-26,29.72-51.72,51.28-67.49,41.29-30.19,86.59,2.42,128,32.32s70.12-49.2,149.4,49.93C485,501.35,463.89-63.9,528.51,19.35c69.93,90.27-26.38,399,12.46,378.78,25.79-13.42,49.16-34.18,67.86-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M.76,297.51C14.81,271.56,30.48,245.78,52,230c41.29-30.2,90.71-7,132.13,22.87s68.49-38.58,146,58.35C487.82,509.92,465.78-70.86,531,14.27c70.67,92.32-29.23,409,9.61,388.83,25.79-13.42,49.16-34.18,67.86-60.29" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/><path d="M.39,302.48c14.06-26,29.72-51.73,51.29-67.5C93,204.79,146.51,218.5,187.93,248.41s67.19-28.22,142.53,66.78c160.83,202.78,137.21-393,203-306,71.41,94.37-32.09,419.08,6.76,398.87,25.79-13.41,49.15-34.17,67.85-60.28" fill="none" stroke="#00a651" stroke-miterlimit="10" stroke-width="0.89"/></g></g></svg>
    </section>
   )

 }

export default Wave2