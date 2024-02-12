import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowDiagonal01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowDiagonal01Icon = (props: CircleArrowDiagonal01IconProps) => {
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
        <path d="M8.24202 15.758L15.758 8.24202M8.24202 15.758C8.66305 16.179 10.4989 15.9164 11.0605 15.9459M8.24202 15.758C7.82099 15.3369 8.08361 13.5011 8.05412 12.9395M15.758 8.24202C16.179 8.66305 15.9164 10.4989 15.9459 11.0605M15.758 8.24202C15.3369 7.82099 13.5011 8.08361 12.9395 8.05412" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CircleArrowDiagonal01Icon;
