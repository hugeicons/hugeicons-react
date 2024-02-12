import * as React from "react";
import type { SVGProps } from "react";

interface Train01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Train01Icon = (props: Train01IconProps) => {
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
        <path d="M4 11V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V11C20 14.7712 20 16.6569 18.8284 17.8284C17.6569 19 15.7712 19 12 19C8.22876 19 6.34315 19 5.17157 17.8284C4 16.6569 4 14.7712 4 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 12C4 12 7.73333 13 12 13C16.2667 13 20 12 20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 19L5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 19L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 16H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 16H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Train01Icon;
