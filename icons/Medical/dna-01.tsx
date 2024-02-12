import * as React from "react";
import type { SVGProps } from "react";

interface Dna01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dna01Icon = (props: Dna01IconProps) => {
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
        <path d="M8.6671 22C9.20107 21.466 9.73505 20.9321 9.24127 18M8.6671 15.3336C7.33381 10.0004 8.33378 9.00042 8.6671 8.6671C9.00042 8.33378 10.0004 7.33381 15.3336 8.6671M8.6671 15.3336C3.33394 14.0003 2.66664 14.6663 2 15.3329M8.6671 15.3336C14.0003 16.6668 14.9996 15.6662 15.3329 15.3329C15.6662 14.9996 16.6668 14.0003 15.3336 8.6671M22 8.6671C21.3334 9.33375 20.6667 10.0004 15.3336 8.6671M15.3329 2C14.799 2.53394 14.2654 3.06829 14.7592 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Dna01Icon;
