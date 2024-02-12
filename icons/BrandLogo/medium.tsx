import * as React from "react";
import type { SVGProps } from "react";

interface MediumIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MediumIcon = (props: MediumIconProps) => {
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
        <circle cx="6.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="15.5" cy="12" rx="2.5" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="21" cy="12" rx="1" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MediumIcon;
