import * as React from "react";
import type { SVGProps } from "react";

interface CloudLoadingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CloudLoadingIcon = (props: CloudLoadingIconProps) => {
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
        <path d="M17.4776 9.00005C17.485 9.00002 17.4925 9 17.5 9C19.9853 9 22 11.0147 22 13.5C22 15.9853 19.9853 18 17.5 18H7C4.23858 18 2 15.7614 2 13C2 10.4003 3.98398 8.26407 6.52042 8.0227M17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227M17.4776 9.00005C17.3753 10.1345 16.9286 11.1696 16.2428 12M6.52042 8.0227C6.67826 8.00768 6.83823 8 7 8C8.12582 8 9.16474 8.37209 10.0005 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 21H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 21H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CloudLoadingIcon;
