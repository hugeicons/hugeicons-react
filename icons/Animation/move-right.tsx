import * as React from "react";
import type { SVGProps } from "react";

interface MoveRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoveRightIcon = (props: MoveRightIconProps) => {
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
        <circle cx="5" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 11.9999L12 11.9999M22 11.9999C22 12.5619 21.5619 12.9891 20.6857 13.8436L19.0294 15.5M22 11.9999C22 11.4378 21.5619 11.0106 20.6857 10.1561L19.0296 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoveRightIcon;
