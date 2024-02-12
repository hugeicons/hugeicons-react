import * as React from "react";
import type { SVGProps } from "react";

interface Database02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Database02Icon = (props: Database02IconProps) => {
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
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Database02Icon;
