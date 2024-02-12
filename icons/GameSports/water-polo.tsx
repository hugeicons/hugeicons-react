import * as React from "react";
import type { SVGProps } from "react";

interface WaterPoloIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WaterPoloIcon = (props: WaterPoloIconProps) => {
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
        <path d="M2 21.1917C2.68524 22.2421 3.57104 22.2421 4.27299 21.1917C6.52985 17.7416 8.67954 23.6732 10.273 21.2306C12.703 17.5703 14.4508 23.9185 16.273 21.1917C18.6492 17.5591 20.1295 23.5745 22 21.5824" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.6184 17.01C18.3131 16.4057 19.9447 14.7123 20.3627 12.0913C20.7506 10.4811 20.5232 6.90398 17.9129 4.44754C16.1746 2.71034 11.565 0.185064 6.5503 3.9816C5.54789 4.7895 3.71926 7.0133 3.51106 9.93527C3.30286 12.8572 4.57349 14.8474 5.22063 15.6301C5.53845 15.9739 5.6944 16.1755 6.02643 16.476C6.31267 16.7352 6.43154 16.8202 6.66416 17.0075C8.07023 17.0603 11.2393 16.4051 13.3709 15.0441C13.8436 14.822 15.0503 14.054 16.0332 12.6902M4.17227 12.8031C5.35359 13.2753 8.38935 13.8309 11.3207 11.1071M11.5404 10.8748C12.976 10.5731 16.5886 10.8748 18.8331 14.8068M7.6968 3.48854C6.58965 5.43307 6.33215 10.6017 7.92835 12.525M11.6466 10.8894C10.8934 9.05308 10.3472 4.55932 12.095 2.24876M11.5124 6.34135C13.2591 6.07725 17.575 6.92208 20.4894 10.5014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WaterPoloIcon;
