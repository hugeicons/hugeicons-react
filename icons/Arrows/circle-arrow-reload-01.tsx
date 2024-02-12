import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowReload01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowReload01Icon = (props: CircleArrowReload01IconProps) => {
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
        <path d="M14.4 7.5L15.3153 8.67019C15.8415 9.34278 15.7447 9.54545 14.8973 9.54545L9.6 9.54545C8.13846 9.54545 8 10.3125 8 11.5909M9.6 16.5L8.68465 15.3298C8.15854 14.6572 8.25535 14.4545 9.10274 14.4545H14.4C15.8615 14.4545 16 13.6875 16 12.4091" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowReload01Icon;
