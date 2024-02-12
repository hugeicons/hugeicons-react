import * as React from "react";
import type { SVGProps } from "react";

interface ThreeDRotateIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeDRotateIcon = (props: ThreeDRotateIconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.5368 2C6.98945 6.5 6.48414 17 11.9941 22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ThreeDRotateIcon;
