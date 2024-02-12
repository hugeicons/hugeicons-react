import * as React from "react";
import type { SVGProps } from "react";

interface MonocleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MonocleIcon = (props: MonocleIconProps) => {
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
        <circle cx="8" cy="8.49561" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8.49561" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 17.4956V19.4956C22 19.8462 21.9398 20.1828 21.8293 20.4956M20 22.3249C19.6872 22.4355 19.3506 22.4956 19 22.4956C18.6494 22.4956 18.3128 22.4355 18 22.3249M16 17.4956V19.4956C16 19.8462 16.0602 20.1828 16.1707 20.4956M22 8.49561V5.49561M22 14.4956V11.4956M16 14.4956V10.4956" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MonocleIcon;
