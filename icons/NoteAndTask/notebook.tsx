import * as React from "react";
import type { SVGProps } from "react";

interface NotebookIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotebookIcon = (props: NotebookIconProps) => {
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
        <path d="M9 14.5H13M9 9.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NotebookIcon;
