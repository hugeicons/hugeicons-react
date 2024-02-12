import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowDiagonal02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowDiagonal02Icon = (props: CircleArrowDiagonal02IconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.758 15.758L8.24202 8.24202M15.758 15.758C15.3369 16.179 13.5011 15.9164 12.9395 15.9459M15.758 15.758C16.179 15.3369 15.9164 13.5011 15.9459 12.9395M8.24202 8.24202C7.82099 8.66305 8.08361 10.4989 8.05413 11.0605M8.24202 8.24202C8.66305 7.82099 10.4989 8.08361 11.0605 8.05412" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowDiagonal02Icon;
