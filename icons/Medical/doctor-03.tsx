import * as React from "react";
import type { SVGProps } from "react";

interface Doctor03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Doctor03Icon = (props: Doctor03IconProps) => {
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
        <path d="M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16V19M17.5 17.5L14.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Doctor03Icon;
