import * as React from "react";
import type { SVGProps } from "react";

interface MoveLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoveLeftIcon = (props: MoveLeftIconProps) => {
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
        <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 9)" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 11.9999H12M2 11.9999C2 12.5619 2.4381 12.9891 3.3143 13.8436L4.97057 15.5M2 11.9999C2 11.4378 2.4381 11.0106 3.3143 10.1561L4.97044 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoveLeftIcon;
