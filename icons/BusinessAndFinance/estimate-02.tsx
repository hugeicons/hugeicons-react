import * as React from "react";
import type { SVGProps } from "react";

interface Estimate02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Estimate02Icon = (props: Estimate02IconProps) => {
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
        <path d="M17.5 11V7.3C17.5 5.03726 17.5 3.90589 16.7247 3.20294C15.9494 2.5 14.7016 2.5 12.2059 2.5H7.79412C5.29845 2.5 4.05061 2.5 3.27531 3.20294C2.5 3.90589 2.5 5.03726 2.5 7.3V13.7C2.5 15.9627 2.5 17.0941 3.27531 17.7971C4.05061 18.5 5.29845 18.5 7.79412 18.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 6.5L14.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 10.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 10.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 14.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 14.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17.5" cy="17.5" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.5 18L17.5 17.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Estimate02Icon;
