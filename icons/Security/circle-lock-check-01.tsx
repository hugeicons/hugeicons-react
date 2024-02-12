import * as React from "react";
import type { SVGProps } from "react";

interface CircleLockCheck01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleLockCheck01Icon = (props: CircleLockCheck01IconProps) => {
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
        <path d="M13 18C13 18 14 18 15 20C15 20 18.1765 15 21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12C14.9041 9.63505 12.5526 8 9.82857 8C6.05725 8 3 11.134 3 15C3 18.866 6.05725 22 9.82857 22C10.1598 22 10.4855 21.9758 10.8041 21.9291" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 9.5V6.5C14.5 4.01472 12.4853 2 10 2C7.51472 2 5.5 4.01472 5.5 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CircleLockCheck01Icon;
