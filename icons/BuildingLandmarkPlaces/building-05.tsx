import * as React from "react";
import type { SVGProps } from "react";

interface Building05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Building05Icon = (props: Building05IconProps) => {
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
        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 9H14C11.518 9 11 9.518 11 12V22H21V12C21 9.518 20.482 9 18 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 22H3V5C3 2.518 3.518 2 6 2H12C14.482 2 15 2.518 15 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 6H6M3 10H6M3 14H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 13H17M15 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22L16 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Building05Icon;
