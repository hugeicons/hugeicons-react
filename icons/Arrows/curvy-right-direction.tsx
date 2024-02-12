import * as React from "react";
import type { SVGProps } from "react";

interface CurvyRightDirectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CurvyRightDirectionIcon = (props: CurvyRightDirectionIconProps) => {
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
        <path d="M20.0029 15.0001C20.0029 15.0001 22.0019 13.5271 22.0019 13.0001C22.0019 12.473 20.0029 11.0001 20.0029 11.0001M21.7771 12.8675C20.3654 13.1574 17.7194 13.27 16.4089 10.8163C15.8656 9.95268 15.9675 8.50668 15.9675 6.86106C15.9336 6.19025 15.3622 4.96995 13.93 5.00057C12.4979 5.03118 12.0277 6.20733 11.9716 6.79158V16.9022C11.9861 17.7539 11.4924 18.9993 9.97603 18.9993C8.49556 18.9993 7.91604 17.6872 8.04374 16.7036C8.38959 14.0396 7.58132 11.2472 4.08109 11.003H1.99707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CurvyRightDirectionIcon;
