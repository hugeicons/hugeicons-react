import * as React from "react";
import type { SVGProps } from "react";

interface YenSendIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const YenSendIcon = (props: YenSendIconProps) => {
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
        <path d="M22 13H14.5M22 13C22 13.7002 20.0057 15.0085 19.5 15.5M22 13C22 12.2998 20.0057 10.9915 19.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default YenSendIcon;
