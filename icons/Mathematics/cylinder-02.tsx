import * as React from "react";
import type { SVGProps } from "react";

interface Cylinder02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cylinder02Icon = (props: Cylinder02IconProps) => {
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
        <path d="M17 4C17 5.10457 14.7614 6 12 6C9.23858 6 7 5.10457 7 4C7 2.89543 9.23858 2 12 2C14.7614 2 17 2.89543 17 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 18C21 20.2091 16.9706 22 12 22C7.02944 22 3 20.2091 3 18C3 15.7909 7.02944 14 12 14C16.9706 14 21 15.7909 21 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 16.5L7 4M20.5 16.5L17 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Cylinder02Icon;
