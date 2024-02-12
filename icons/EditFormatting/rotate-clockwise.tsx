import * as React from "react";
import type { SVGProps } from "react";

interface RotateClockwiseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateClockwiseIcon = (props: RotateClockwiseIconProps) => {
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
        <path d="M4 2V5.13219C4 5.42605 4.36724 5.55908 4.55527 5.33333C6.3854 3.2875 9.04499 2 12.0051 2C17.5251 2 22 6.47715 22 12C22 15.9582 19.7015 19.3793 16.367 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.7347 22C12.2016 22 12.6611 21.9687 13.1111 21.9083M2.26537 8.66663C2.15297 9.06381 2.06477 9.46524 2 9.86888M2.03457 13.538C2.10487 13.938 2.19644 14.3341 2.30852 14.7244M3.83292 17.9962C4.07124 18.3496 4.3296 18.6898 4.6071 19.0146M7.42857 21.3606C7.78228 21.5631 8.15042 21.7463 8.53228 21.9083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateClockwiseIcon;
