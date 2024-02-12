import * as React from "react";
import type { SVGProps } from "react";

interface Clubs01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Clubs01Icon = (props: Clubs01IconProps) => {
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
        <path d="M14 13L12 10L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 5.5C14.5 8 12 10 12 10C12 10 9.5 8 9.5 5.5C9.5 3 10.6193 2 12 2C13.3807 2 14.5 3 14.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18.5 15.5C16 15.5 14 13 14 13C14 13 16 10.5 18.5 10.5C21 10.5 22 11.6193 22 13C22 14.3807 21 15.5 18.5 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5.5 15.5C8 15.5 10 13 10 13C10 13 8 10.5 5.5 10.5C3 10.5 2 11.6193 2 13C2 14.3807 3 15.5 5.5 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 22C16 22 13 16 10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 22C8 22 11 16 14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Clubs01Icon;
