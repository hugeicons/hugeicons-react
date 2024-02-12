import * as React from "react";
import type { SVGProps } from "react";

interface JokerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JokerIcon = (props: JokerIconProps) => {
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
        <path d="M4 7C5.10457 7 6 6.10457 6 5C6 3.89543 5.10457 3 4 3C2.89543 3 2 3.89543 2 5C2 6.10457 2.89543 7 4 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 9C21.1046 9 22 8.10457 22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7C18 8.10457 18.8954 9 20 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.96694 17C1.44331 11.5 8.98977 11 4.95922 7M6.37859 5C7.48264 5 9.99986 6 9.99986 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 17C10.2172 18.4523 13.3284 18.2088 19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20C9.96256 21.4523 13.5182 21.2088 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0294 6.04443C15.6645 6.4788 10.2107 9.78486 11.0504 17.238M18.2516 8.08871C17.0366 8.66132 15.1257 9.88729 17.5988 12.9124C18.3792 13.8671 19.2863 15.8795 18.9515 16.8686" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default JokerIcon;
