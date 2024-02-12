import * as React from "react";
import type { SVGProps } from "react";

interface RightToLeftListTriangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RightToLeftListTriangleIcon = (props: RightToLeftListTriangleIconProps) => {
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
        <path d="M3 5.5L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.6 16.8926C17.5333 17.607 17 17.9642 17 18.5C17 19.0358 17.5333 19.393 18.6 20.1074C19.6667 20.8218 20.2 21.1789 20.6 20.9111C21 20.6432 21 19.9288 21 18.5C21 17.0712 21 16.3568 20.6 16.0889C20.2 15.8211 19.6667 16.1782 18.6 16.8926Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.6 3.89263C17.5333 4.60702 17 4.96421 17 5.5C17 6.03579 17.5333 6.39298 18.6 7.10737C19.6667 7.82176 20.2 8.17895 20.6 7.91105C21 7.64316 21 6.92877 21 5.5C21 4.07123 21 3.35684 20.6 3.08895C20.2 2.82105 19.6667 3.17824 18.6 3.89263Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 18.5L13 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RightToLeftListTriangleIcon;
