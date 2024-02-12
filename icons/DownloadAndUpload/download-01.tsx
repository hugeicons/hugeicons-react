import * as React from "react";
import type { SVGProps } from "react";

interface Download01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Download01Icon = (props: Download01IconProps) => {
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
        <path d="M3.09502 10C3.03241 10.457 3 10.9245 3 11.4C3 16.7019 7.02944 21 12 21C16.9706 21 21 16.7019 21 11.4C21 10.9245 20.9676 10.457 20.905 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 13L12 3M12 13C11.2998 13 9.99153 11.0057 9.5 10.5M12 13C12.7002 13 14.0085 11.0057 14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Download01Icon;
