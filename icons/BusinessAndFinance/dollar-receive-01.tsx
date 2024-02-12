import * as React from "react";
import type { SVGProps } from "react";

interface DollarReceive01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DollarReceive01Icon = (props: DollarReceive01IconProps) => {
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
        <path d="M10.625 8.62963C10.625 6.62504 8.77817 5 6.5 5C4.22182 5 2.375 6.62504 2.375 8.62963C2.375 10.6342 3.5 11.7407 6.5 11.7407C9.5 11.7407 11 12.7778 11 15.3704C11 17.963 8.98528 19 6.5 19C4.01472 19 2 17.375 2 15.3704" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 3L6.5 5M6.5 21L6.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 12H22M14.5 12C14.5 12.7002 16.4943 14.0085 17 14.5M14.5 12C14.5 11.2998 16.4943 9.99153 17 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DollarReceive01Icon;
