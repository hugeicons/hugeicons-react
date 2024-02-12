import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowReload02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowReload02Icon = (props: CircleArrowReload02IconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 9.6L15.3298 8.68465C14.6572 8.15854 14.4545 8.25535 14.4545 9.10274V14.4C14.4545 15.8615 13.6875 16 12.4091 16M7.5 14.4L8.67019 15.3153C9.34278 15.8415 9.54545 15.7447 9.54545 14.8973L9.54545 9.6C9.54545 8.13846 10.3125 8 11.5909 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowReload02Icon;
