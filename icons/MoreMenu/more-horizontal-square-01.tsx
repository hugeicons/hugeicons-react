import * as React from "react";
import type { SVGProps } from "react";

interface MoreHorizontalSquare01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoreHorizontalSquare01Icon = (props: MoreHorizontalSquare01IconProps) => {
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
        <rect x="18" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoreHorizontalSquare01Icon;
