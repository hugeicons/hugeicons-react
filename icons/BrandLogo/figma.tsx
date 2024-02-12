import * as React from "react";
import type { SVGProps } from "react";

interface FigmaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FigmaIcon = (props: FigmaIconProps) => {
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
        <circle cx="15" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FigmaIcon;
