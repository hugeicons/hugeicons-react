import * as React from "react";
import type { SVGProps } from "react";

interface PinLocation03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PinLocation03Icon = (props: PinLocation03IconProps) => {
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
        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 10L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PinLocation03Icon;
