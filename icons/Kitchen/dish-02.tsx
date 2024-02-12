import * as React from "react";
import type { SVGProps } from "react";

interface Dish02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dish02Icon = (props: Dish02IconProps) => {
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
        <path d="M21 17C18.2386 17 16 14.7614 16 12C16 9.23858 18.2386 7 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 3L6 8M6 21L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 8H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3L9 7.35224C9 12.216 3 12.2159 3 7.35207L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dish02Icon;
