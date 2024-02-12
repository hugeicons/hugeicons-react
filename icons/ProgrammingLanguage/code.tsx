import * as React from "react";
import type { SVGProps } from "react";

interface CodeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CodeIcon = (props: CodeIconProps) => {
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
        <path d="M8 12H8.00897M11.9955 12H12.0045M15.991 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CodeIcon;
