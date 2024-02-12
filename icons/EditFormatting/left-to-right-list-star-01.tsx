import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightListStar01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightListStar01Icon = (props: LeftToRightListStar01IconProps) => {
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
        <path d="M3 5.5L12 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 18.5L12 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 5.5H16M17.0417 8L19.9583 3M19.9583 8L17.0417 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 18.5H16M17.0417 21L19.9583 16M19.9583 21L17.0417 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LeftToRightListStar01Icon;
