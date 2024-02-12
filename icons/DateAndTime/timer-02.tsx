import * as React from "react";
import type { SVGProps } from "react";

interface Timer02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Timer02Icon = (props: Timer02IconProps) => {
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
        <path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 9L13.5607 11.9393M13.5607 11.9393C13.2892 11.6679 12.9142 11.5 12.5 11.5C11.6716 11.5 11 12.1716 11 13C11 13.8284 11.6716 14.5 12.5 14.5C13.3284 14.5 14 13.8284 14 13C14 12.5858 13.8321 12.2108 13.5607 11.9393Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5 3.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 2H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 15H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 19H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Timer02Icon;
