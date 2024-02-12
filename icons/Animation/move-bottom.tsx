import * as React from "react";
import type { SVGProps } from "react";

interface MoveBottomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoveBottomIcon = (props: MoveBottomIconProps) => {
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
        <path d="M11.9999 22L11.9999 12M11.9999 22C12.5619 22 12.9891 21.5619 13.8436 20.6857L15.5 19.0294M11.9999 22C11.4378 22 11.0106 21.5619 10.1561 20.6857L8.5 19.0296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3" cy="3" r="3" transform="matrix(4.37114e-08 1 1 -4.37114e-08 9 2)" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoveBottomIcon;
