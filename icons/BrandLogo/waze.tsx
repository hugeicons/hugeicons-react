import * as React from "react";
import type { SVGProps } from "react";

interface WazeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WazeIcon = (props: WazeIconProps) => {
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
        <path d="M17.5 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 13C10.5 13 11.5 15 14 15C16.5 15 17.5 13 17.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 20C11 21.1046 10.1046 22 9 22C7.89543 22 7 21.1046 7 20C7 18.8954 7.89543 18 9 18C10.1046 18 11 18.8954 11 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.9992 19.9446C11.6843 19.9866 12.3573 20 13 20C17.9706 20 22 15.9706 22 11C22 6.02944 17.9706 2 13 2C8.02944 2 4 6.02944 4 11C4 12.039 4 14 2 15C3.05768 17.3798 4.97354 18.6409 7.12557 19.3009" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 22.0003C18.1046 22.0003 19 21.1049 19 20.0003C19 19.3295 18.6698 18.7359 18.163 18.373C17.2278 19.0291 16.1621 19.5118 15.0126 19.7744C15.0043 19.8486 15 19.9239 15 20.0003C15 21.1049 15.8954 22.0003 17 22.0003Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WazeIcon;
