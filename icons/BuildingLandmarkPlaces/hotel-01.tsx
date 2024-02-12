import * as React from "react";
import type { SVGProps } from "react";

interface Hotel01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hotel01Icon = (props: Hotel01IconProps) => {
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
        <path d="M3 4V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7071C21 21.4142 21 20.9428 21 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 8V9.5M10.5 11V9.5M13.5 8V9.5M13.5 11V9.5M10.5 9.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 22.0001L14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 4H8C8.6399 2.82727 10.1897 2 12 2C13.8103 2 15.3601 2.82727 16 4H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8H7M6 12H7M6 16H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8H18M17 12H18M17 16H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Hotel01Icon;
