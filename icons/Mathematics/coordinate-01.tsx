import * as React from "react";
import type { SVGProps } from "react";

interface Coordinate01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Coordinate01Icon = (props: Coordinate01IconProps) => {
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
        <path d="M4.00781 4.99961C4.59743 4.39305 6.16671 2.00098 7.00666 2.00098C7.84661 2.00098 9.41589 4.39305 10.0055 4.99961M7.00666 2.84956V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.0023 13.9951C19.6088 14.5846 22.0011 16.1538 22.0011 16.9938C22.0011 17.8337 19.6088 19.4029 19.0023 19.9924M21.1906 16.994H1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Coordinate01Icon;
