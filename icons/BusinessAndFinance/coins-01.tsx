import * as React from "react";
import type { SVGProps } from "react";

interface Coins01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Coins01Icon = (props: Coins01IconProps) => {
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
        <ellipse cx="15.5" cy="11" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="8.5" cy="4" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 21C4.10819 20.7698 2.36991 20.1745 2 19L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Coins01Icon;
