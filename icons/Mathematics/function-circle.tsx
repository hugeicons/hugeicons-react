import * as React from "react";
import type { SVGProps } from "react";

interface FunctionCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FunctionCircleIcon = (props: FunctionCircleIconProps) => {
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
        <path d="M8.5 15.5C8.63206 15.9782 8.89835 16.5 9.59365 16.5C10.7968 16.5 11.0976 15.5 12 12C12.9024 8.5 13.2032 7.5 14.4064 7.5C15.1016 7.5 15.3679 8.02179 15.5 8.5M10.5417 10.75H14.4064" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FunctionCircleIcon;
