import * as React from "react";
import type { SVGProps } from "react";

interface StepOverIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StepOverIcon = (props: StepOverIconProps) => {
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
        <path d="M14 14L15.5858 15.8398C16.2525 16.6133 16.5858 17 17 17C17.4142 17 17.7475 16.6133 18.4142 15.8398L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 17V11C17 8.19108 17 6.78661 16.3259 5.77772C16.034 5.34096 15.659 4.96596 15.2223 4.67412C14.2134 4 12.8089 4 10 4C7.19108 4 5.78661 4 4.77772 4.67412C4.34096 4.96596 3.96596 5.34096 3.67412 5.77772C3 6.78661 3 8.19108 3 11L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 20H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StepOverIcon;
