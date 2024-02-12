import * as React from "react";
import type { SVGProps } from "react";

interface ChartLineData02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChartLineData02Icon = (props: ChartLineData02IconProps) => {
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
        <circle cx="8.5" cy="10.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.4341 14.2963L18 9M9.58251 11.5684L13.2038 14.2963M3 19L7.58957 11.8792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 21H9C5.70017 21 4.05025 21 3.02513 19.9749C2 18.9497 2 17.2998 2 14V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ChartLineData02Icon;
