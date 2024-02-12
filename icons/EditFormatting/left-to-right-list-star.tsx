import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightListStarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightListStarIcon = (props: LeftToRightListStarIconProps) => {
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
        <path d="M12 5.5L21 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18.5L21 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 5.5H3M4.04167 8L6.95833 3M6.95833 8L4.04167 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18.5H3M4.04167 21L6.95833 16M6.95833 21L4.04167 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LeftToRightListStarIcon;
