import * as React from "react";
import type { SVGProps } from "react";

interface HourglassOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HourglassOffIcon = (props: HourglassOffIconProps) => {
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
        <path d="M5 5.01953C5 8.8814 8.13401 12.0121 12 12.0121C8.13401 12.0121 5 15.1427 5 19.0046V22.0014M19 19.0046V22.0014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 22.0015H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2.02246L22 22.0011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5625 1.99805H20.0625M16.0405 10.9884C16.7103 10.4387 18.2094 9.32398 18.8236 6.79912C19.097 5.67517 19.027 3.59803 19.027 1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HourglassOffIcon;
