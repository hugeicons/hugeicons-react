import * as React from "react";
import type { SVGProps } from "react";

interface VkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VkIcon = (props: VkIconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M14 10.7486V7.05285C14 6.22025 13.8489 6.05286 13.0196 6.05286L10.6696 6.0001C9.93806 6.0001 9.5723 6.0001 9.42446 6.23724C9.27662 6.47437 9.44019 6.79868 9.76735 7.4473C9.94905 7.80755 10.0462 8.06845 10.0462 8.47222V11.1315C10.0462 11.9725 10.0462 12.393 9.72664 12.5177C9.40712 12.6425 9.14158 12.3602 8.6105 11.7957C7.30883 10.4119 6.63136 8.6843 6.18601 6.80138C6.09378 6.41142 6.04766 6.21643 5.91001 6.10827C5.77235 6.0001 5.5763 6.0001 5.18419 6.0001H2.98492C2.50242 6.0001 2.26117 6.0001 2.11047 6.1707C1.95977 6.34129 1.98899 6.5589 2.04743 6.99411C2.57467 10.9207 6.028 17.3595 12.4074 17.9737C13.5372 18.0825 14 17.7771 14 16.5391C14 15.8374 13.9851 14.7029 14.8682 14.5542C15.3306 14.4764 15.6421 14.6406 16.1594 15.0745C17.0555 15.826 17.5247 16.7434 17.8517 17.4406C18.0686 17.9032 18.2299 18 18.7396 18H20.8138C21.8618 18 22.1473 17.7442 21.6805 16.7605C21.0895 15.5151 20.2484 14.5257 19.4836 13.867C18.8484 13.3199 18.5308 13.0463 18.5131 12.845C18.4953 12.6436 18.7284 12.3586 19.1944 11.7885C20.0948 10.6871 21.3202 8.9578 21.8922 7.12282C22.1756 6.21377 21.909 6.0001 20.988 6.0001H19.1249C18.2224 6.0001 18.223 5.96887 18.01 6.99279C17.6642 8.65426 16.5317 10.2511 15.4679 11.3382C14.9633 11.8539 14.6581 12.1645 14.3432 12.0379C14.0284 11.9114 14 11.5238 14 10.7486Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VkIcon;
