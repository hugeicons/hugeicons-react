import * as React from "react";
import type { SVGProps } from "react";

interface Tv02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tv02Icon = (props: Tv02IconProps) => {
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
        <path d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 19L19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 19L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tv02Icon;
