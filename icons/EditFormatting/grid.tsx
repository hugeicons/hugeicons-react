import * as React from "react";
import type { SVGProps } from "react";

interface GridIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GridIcon = (props: GridIconProps) => {
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
        <path d="M17 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 17L2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GridIcon;
