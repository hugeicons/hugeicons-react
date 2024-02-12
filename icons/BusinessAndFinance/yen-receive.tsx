import * as React from "react";
import type { SVGProps } from "react";

interface YenReceiveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const YenReceiveIcon = (props: YenReceiveIconProps) => {
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
        <path d="M2 3.5C2.36667 5.03909 3.98 8.53704 7.5 10.216M7.5 10.216C11.02 8.53704 12.6333 5.03909 13 3.5M7.5 10.216V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 13.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 17.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 13H22M14.5 13C14.5 13.7002 16.4943 15.0085 17 15.5M14.5 13C14.5 12.2998 16.4943 10.9915 17 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default YenReceiveIcon;
