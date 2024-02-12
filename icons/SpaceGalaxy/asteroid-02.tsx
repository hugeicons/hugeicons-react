import * as React from "react";
import type { SVGProps } from "react";

interface Asteroid02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Asteroid02Icon = (props: Asteroid02IconProps) => {
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
        <path d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 13L14.5 5.50003M18 2L16.5 3.5M22 6.00003L19 9M11 16L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Asteroid02Icon;
