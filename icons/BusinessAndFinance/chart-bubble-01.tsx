import * as React from "react";
import type { SVGProps } from "react";

interface ChartBubble01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChartBubble01Icon = (props: ChartBubble01IconProps) => {
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
        <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11.5" cy="15.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ChartBubble01Icon;
