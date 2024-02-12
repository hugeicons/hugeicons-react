import * as React from "react";
import type { SVGProps } from "react";

interface Bus01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bus01Icon = (props: Bus01IconProps) => {
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
        <path d="M17 20.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 20.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6.78186C4 6.14251 4 5.82283 4.17387 5.43355C4.34773 5.04428 4.52427 4.88606 4.87736 4.56964C6.03437 3.53277 8.36029 2 12 2C15.6397 2 17.9656 3.53277 19.1226 4.56964C19.4757 4.88606 19.6523 5.04428 19.8261 5.43355C20 5.82283 20 6.14251 20 6.78186V14C20 16.8284 20 18.2426 19.1213 19.1213C18.2426 20 16.8284 20 14 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V6.78186Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 14C4 14 7.73333 15 12 15C16.2667 15 20 14 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 17.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 17.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 17.5L13 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 9L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 9L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bus01Icon;
