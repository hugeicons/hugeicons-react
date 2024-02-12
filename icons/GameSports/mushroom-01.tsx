import * as React from "react";
import type { SVGProps } from "react";

interface Mushroom01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mushroom01Icon = (props: Mushroom01IconProps) => {
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
        <path d="M17 15C19.412 14.6082 21 13.9411 21 13.1839C21 11.9778 16.9706 11 12 11C7.02944 11 3 11.9778 3 13.1839C3 13.9411 4.58803 14.6082 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 13C21 6.92487 16.9706 2 12 2C7.02944 2 3 6.92487 3 13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 4.76514C17.5348 5.50377 16.671 6 15.6823 6C14.2009 6 13 4.88603 13 3.51187C13 2.94318 13.2057 2.41905 13.5518 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 11.5C9.99527 14.9495 9.90043 20.1752 8 22M14 11.5C14.0047 14.9495 14.0996 20.1752 16 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.00781 7L8.99883 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mushroom01Icon;
