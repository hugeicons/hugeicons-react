import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightListDashIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightListDashIcon = (props: LeftToRightListDashIconProps) => {
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
        <path d="M9 5L21 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 5L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 19L21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 19L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LeftToRightListDashIcon;
