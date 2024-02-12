import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinEllipseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinEllipseIcon = (props: BitcoinEllipseIconProps) => {
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
        <path d="M9.5 16L9.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8V6M13.5 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 18V16M13.5 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 12H14.5C15.3284 12 16 12.6716 16 13.5V14.5C16 15.3284 15.3284 16 14.5 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8L14.5 8C15.3284 8 16 8.67157 16 9.5V10.5C16 11.3284 15.3284 12 14.5 12H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinEllipseIcon;
