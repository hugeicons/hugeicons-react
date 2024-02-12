import * as React from "react";
import type { SVGProps } from "react";

interface CommandIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CommandIcon = (props: CommandIconProps) => {
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
        <path d="M15 9V15H9V9H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 15.002H6C4.34315 15.002 3 16.3451 3 18.002C3 19.6588 4.34315 21.002 6 21.002C7.65685 21.002 9 19.6588 9 18.002V15.002Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 9.00012L15 6.00012C15 4.34327 16.3431 3.00012 18 3.00012C19.6569 3.00012 21 4.34327 21 6.00012C21 7.65698 19.6569 9.00012 18 9.00012H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 9.00012V6.00012C9 4.34327 7.65685 3.00012 6 3.00012C4.34315 3.00012 3 4.34327 3 6.00012C3 7.65698 4.34315 9.00012 6 9.00012H9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CommandIcon;
