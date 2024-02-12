import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowMoveRightDownIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowMoveRightDownIcon = (props: CircleArrowMoveRightDownIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.4921 11.6429C15.0223 11.031 16.0939 10.1642 15.9847 9.80444M15.9847 9.80444C15.9847 9.38542 14.9336 8.58635 14.4921 8.00049M15.9847 9.80444C14.0658 9.92644 11.5926 9.55136 10.5852 10.3508C9.52468 11.2379 9.91163 13.7604 9.80534 15.993M9.80534 15.993C10.3405 16.0399 11.0315 15.0079 11.6398 14.4736M9.80534 15.993C9.44987 16.0907 8.54077 14.9853 8.00781 14.4759" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowMoveRightDownIcon;
