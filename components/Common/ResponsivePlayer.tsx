"use client";

import dynamic from "next/dynamic";

// loading react-player on client side only to avoid hydration error
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ResponsivePlayer = ({
  videoUrl,
  playerClass,
}: {
  videoUrl: string;
  playerClass?: string;
}) => {
  return (
    /* 
      -> Player ratio: 100 / (1280 / 720) because of pt-[56.25%],
      -> light and playIcon props helps to add custom play button and thumbnail
      -> playing props helps to start the video when click that custom button
    */
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        className={`absolute top-0 left-0 overflow-hidden transform-none ${playerClass}`}
        url={videoUrl || `https://www.youtube.com/watch?v=ysz5S6PUM-U`}
        controls={true}
        playing
        width="100%" // don't remove otherwise default value will be 640px and brake the responsive
        height="100%" // don't remove otherwise default value will be 480px and brake the responsive
        // light={true}
        // playIcon={
        //   <button aria-label="Play">
        //     <svg
        //       width="88"
        //       height="88"
        //       viewBox="0 0 88 88"
        //       fill="none"
        //       xmlns="http://www.w3.org/2000/svg"
        //     >
        //       <g filter="url(#filter0_b_1573_11843)">
        //         <circle
        //           cx="43.9997"
        //           cy="44.1559"
        //           r="43.5065"
        //           fill="white"
        //           fillOpacity="0.35"
        //         />
        //       </g>
        //       <circle cx="43.9998" cy="44.1558" r="18.2727" fill="#FDFDFD" />
        //       <path
        //         d="M50.3315 43.2899C50.9982 43.6748 50.9982 44.637 50.3315 45.0219L41.5848 50.0718C40.9181 50.4567 40.0848 49.9756 40.0848 49.2058V39.1059C40.0848 38.3361 40.9181 37.855 41.5848 38.2399L50.3315 43.2899Z"
        //         fill="#FFA654"
        //       />
        //       <defs>
        //         <filter
        //           id="filter0_b_1573_11843"
        //           x="-5.50684"
        //           y="-5.35059"
        //           width="99.0132"
        //           height="99.0129"
        //           filterUnits="userSpaceOnUse"
        //           colorInterpolationFilters="sRGB"
        //         >
        //           <feFlood floodOpacity="0" result="BackgroundImageFix" />
        //           <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        //           <feComposite
        //             in2="SourceAlpha"
        //             operator="in"
        //             result="effect1_backgroundBlur_1573_11843"
        //           />
        //           <feBlend
        //             mode="normal"
        //             in="SourceGraphic"
        //             in2="effect1_backgroundBlur_1573_11843"
        //             result="shape"
        //           />
        //         </filter>
        //       </defs>
        //     </svg>
        //   </button>
        // }
      />
    </div>
  );
};

export default ResponsivePlayer;
