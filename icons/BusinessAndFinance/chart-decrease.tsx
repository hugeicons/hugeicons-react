import * as React from "react";
import type { SVGProps } from "react";

interface ChartDecreaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChartDecreaseIcon = (props: ChartDecreaseIconProps) => {
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
        <path d="M6.99707 5.99902C10.5286 5.999 17.9122 7.46328 17.6979 16.5654M15.4886 14.955L17.3721 16.8519C17.5656 17.0468 17.8798 17.0482 18.0751 16.8552L19.9971 14.955" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ChartDecreaseIcon;
