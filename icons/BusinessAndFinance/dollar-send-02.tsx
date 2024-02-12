import * as React from "react";
import type { SVGProps } from "react";

interface DollarSend02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DollarSend02Icon = (props: DollarSend02IconProps) => {
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
        <path d="M6.5 3L6.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12H14.5M22 12C22 12.7002 20.0057 14.0085 19.5 14.5M22 12C22 11.2998 20.0057 9.99153 19.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DollarSend02Icon;
