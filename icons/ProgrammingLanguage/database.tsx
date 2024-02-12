import * as React from "react";
import type { SVGProps } from "react";

interface DatabaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DatabaseIcon = (props: DatabaseIconProps) => {
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
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default DatabaseIcon;
