import * as React from "react";
import type { SVGProps } from "react";

interface CircleLockCheck02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleLockCheck02Icon = (props: CircleLockCheck02IconProps) => {
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
        <path d="M10.9635 21.9824C10.7992 21.9941 10.6333 22 10.466 22C6.61877 22 3.5 18.866 3.5 15C3.5 11.134 6.61877 8 10.466 8C12.8331 8 15 9 16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9.5V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16.5" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CircleLockCheck02Icon;
