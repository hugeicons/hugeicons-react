import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowMoveDownLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowMoveDownLeftIcon = (props: CircleArrowMoveDownLeftIconProps) => {
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
        <path d="M10.374 12.5316C9.86572 13.1618 8.83293 13.9425 9.01677 14.3131M9.01677 14.3131C8.91436 14.6911 9.9143 15.4381 10.3762 16.008M9.01677 14.3131C11.0995 14.3584 12.3739 14.1065 13.604 12.8816C14.8851 11.6059 15.0959 10.212 14.9922 8.00342" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowMoveDownLeftIcon;
