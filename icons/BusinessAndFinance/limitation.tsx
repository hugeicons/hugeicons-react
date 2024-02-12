import * as React from "react";
import type { SVGProps } from "react";

interface LimitationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LimitationIcon = (props: LimitationIconProps) => {
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
        <path d="M8 20C7.48595 20.6974 7.2774 20.9401 6.85472 20.9929C6.43205 21.0457 6.13982 20.8037 5.55537 20.3197C3.38109 18.5193 2 15.8253 2 12.8147C2 7.39421 6.47715 3 12 3C17.5228 3 22 7.39421 22 12.8147C22 15.8253 20.6189 18.5193 18.4446 20.3197C17.8602 20.8037 17.568 21.0457 17.1453 20.9929C16.7226 20.9401 16.514 20.6974 16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 10.5L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LimitationIcon;
