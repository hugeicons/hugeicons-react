import * as React from "react";
import type { SVGProps } from "react";

interface Chemistry01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Chemistry01Icon = (props: Chemistry01IconProps) => {
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
        <path d="M3 9L11 9M20 9L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 4V14.7857C17 16.5609 15.6569 18 14 18C12.3431 18 11 16.5609 11 14.7857V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 4L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Chemistry01Icon;
