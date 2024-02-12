import * as React from "react";
import type { SVGProps } from "react";

interface ChartRelationshipIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChartRelationshipIcon = (props: ChartRelationshipIconProps) => {
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
        <path d="M11 5L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6.44444" cy="6.44444" r="4.44444" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ChartRelationshipIcon;
