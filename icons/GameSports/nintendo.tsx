import * as React from "react";
import type { SVGProps } from "react";

interface NintendoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NintendoIcon = (props: NintendoIconProps) => {
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
        <path d="M16 19.5H8C5.17157 19.5 3.75736 19.5 2.87868 18.5586C2 17.6171 2 16.1019 2 13.0714V10.9286C2 7.89811 2 6.38288 2.87868 5.44144C3.75736 4.5 5.17157 4.5 8 4.5H16C18.8284 4.5 20.2426 4.5 21.1213 5.44144C22 6.38288 22 7.89811 22 10.9286V13.0714C22 16.1019 22 17.6171 21.1213 18.5586C20.2426 19.5 18.8284 19.5 16 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 4.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 4.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 15.5L19.491 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.50801 8.5L4.49902 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NintendoIcon;
