import * as React from "react";
import type { SVGProps } from "react";

interface GridOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GridOffIcon = (props: GridOffIconProps) => {
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
        <path d="M7 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 22V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 2V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 7L11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 17L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 17L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GridOffIcon;
