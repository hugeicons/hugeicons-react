import * as React from "react";
import type { SVGProps } from "react";

interface RainDoubleDropIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RainDoubleDropIcon = (props: RainDoubleDropIconProps) => {
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
        <path d="M2 13.3424C2 9.9951 4.73825 6.68726 6.66022 4.77778C7.70404 3.74074 9.29597 3.74074 10.3398 4.77778C12.2617 6.68726 15 9.9951 15 13.3424C15 16.6243 12.5386 20 8.5 20C4.46142 20 2 16.6243 2 13.3424Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.4999 20C19.5385 20 21.9999 16.6243 21.9999 13.3424C21.9999 9.9951 19.2617 6.68726 17.3397 4.77778C16.2959 3.74074 14.704 3.74074 13.6602 4.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RainDoubleDropIcon;
