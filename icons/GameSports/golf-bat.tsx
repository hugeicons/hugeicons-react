import * as React from "react";
import type { SVGProps } from "react";

interface GolfBatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GolfBatIcon = (props: GolfBatIconProps) => {
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
        <path d="M7.47095 17.263L12 20.9742C11.6197 21.3637 11.255 21.7646 10.7178 21.9214C10.4486 22 10.1597 22 9.58202 22H6.64577C5.12431 22 3.69593 21.514 3.15891 19.9348C2.65447 18.4514 3.35188 15.9891 5.23816 16C5.93452 16.0041 6.44666 16.4237 7.47095 17.263Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21L16.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6206 3.42288L16.1333 9.00001C16.0557 9.29111 16.1934 9.59668 16.4628 9.73142C16.7642 9.8821 17.1308 9.77111 17.298 9.47856L20.1617 4.46705C20.5954 3.70809 20.2263 2.7421 19.397 2.46568C18.6397 2.21323 17.8263 2.65152 17.6206 3.42288Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GolfBatIcon;
