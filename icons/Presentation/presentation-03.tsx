import * as React from "react";
import type { SVGProps } from "react";

interface Presentation03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Presentation03Icon = (props: Presentation03IconProps) => {
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
        <path d="M3 10C3 12.8284 3 14.2426 3.87868 15.1213C4.75736 16 6.17157 16 9 16H15C17.8284 16 19.2426 16 20.1213 15.1213C21 14.2426 21 12.8284 21 10V4.5H3V10Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V3.5C2 3.9714 2 4.20711 2.14645 4.35355C2.29289 4.5 2.5286 4.5 3 4.5H21C21.4714 4.5 21.7071 4.5 21.8536 4.35355C22 4.20711 22 3.9714 22 3.5V3C22 2.5286 22 2.29289 21.8536 2.14645C21.7071 2 21.4714 2 21 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Presentation03Icon;
