import * as React from "react";
import type { SVGProps } from "react";

interface Unlink02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Unlink02Icon = (props: Unlink02IconProps) => {
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
        <path d="M16.8463 14.6095L19.4558 12C21.5147 9.94113 21.5147 6.60303 19.4558 4.54416C17.397 2.48528 14.0589 2.48528 12 4.54416L9.39045 7.1537M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.397 2.48528 14.0589 4.54416 12L7.1537 9.39045" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 17H19.9211M17 22L17 19.9211" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 7H4.07889M7 2L7 4.07889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Unlink02Icon;
