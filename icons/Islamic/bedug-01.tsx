import * as React from "react";
import type { SVGProps } from "react";

interface Bedug01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bedug01Icon = (props: Bedug01IconProps) => {
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
        <path d="M5 16C6.10457 16 7 12.866 7 9C7 5.13401 6.10457 2 5 2C3.89543 2 3 5.13401 3 9C3 12.866 3.89543 16 5 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 15.5L16 22M8 22L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 2L16.1103 3.58719C19.1126 4.01608 21 5.73626 21 9C21 11.0222 20.065 13.3797 18 14.0512M5 16L14.0942 14.7008M8.83195 2.54742C9.56585 4.09552 10.123 6.18217 10.0113 9.56933C9.93575 11.2861 9.68691 13.6615 8.85527 15.4492" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bedug01Icon;
