import * as React from "react";
import type { SVGProps } from "react";

interface Timer01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Timer01Icon = (props: Timer01IconProps) => {
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
        <path d="M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 4.81986C3.14864 6.63888 2 9.17371 2 11.9774C2 17.5127 6.47715 22 12 22C17.5228 22 22 17.5127 22 11.9774C22 7.12406 18.5581 3.07642 13.9872 2.15274C13.1512 1.9838 12.7332 1.89933 12.3666 2.20008C12 2.50083 12 2.987 12 3.95935V4.96161" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Timer01Icon;
