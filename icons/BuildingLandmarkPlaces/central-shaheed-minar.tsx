import * as React from "react";
import type { SVGProps } from "react";

interface CentralShaheedMinarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CentralShaheedMinarIcon = (props: CentralShaheedMinarIconProps) => {
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
        <path d="M3 22V10.2014C3 10.0655 3.13111 9.96866 3.25997 10.0094L6.35997 10.9896C6.4433 11.0159 6.5 11.0937 6.5 11.1816V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 22V10.2014C21 10.0655 20.8689 9.96866 20.74 10.0094L17.64 10.9896C17.5567 11.0159 17.5 11.0937 17.5 11.1816V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V8H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 22L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8L7.17245 3.31623C6.79764 2.25381 6.99125 2 8.17652 2H15.8235C17.0087 2 17.2024 2.25381 16.8275 3.31623L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CentralShaheedMinarIcon;
