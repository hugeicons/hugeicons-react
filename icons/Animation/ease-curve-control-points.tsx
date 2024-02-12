import * as React from "react";
import type { SVGProps } from "react";

interface EaseCurveControlPointsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EaseCurveControlPointsIcon = (props: EaseCurveControlPointsIconProps) => {
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
        <path d="M21 4C16 4 13.9792 8.0416 12 12C10.0208 15.9584 8 20 3 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20H12M15 20L17 20M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4H14M7 4L9 4M7 4C7 5.10457 6.10457 6 5 6C3.89543 6 3 5.10457 3 4C3 2.89543 3.89543 2 5 2C6.10457 2 7 2.89543 7 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EaseCurveControlPointsIcon;
