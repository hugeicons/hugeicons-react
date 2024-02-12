import * as React from "react";
import type { SVGProps } from "react";

interface Prism01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Prism01Icon = (props: Prism01IconProps) => {
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
        <path d="M15.5802 8L14.9874 6.85021C13.664 4.2834 13.0023 3 12 3C10.9977 3 10.336 4.2834 9.01261 6.85021L4.59051 15.4272C3.31146 17.908 2.67193 19.1484 3.16823 20.0742C3.66452 21 4.96898 21 7.5779 21H16.4221C19.031 21 20.3355 21 20.8318 20.0742C21.3281 19.1484 20.6885 17.908 19.4095 15.4272L19.0598 14.7489" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L22 7M8 10L21.4615 11.5M8 10L22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Prism01Icon;
