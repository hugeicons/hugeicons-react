import * as React from "react";
import type { SVGProps } from "react";

interface PropertyNewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PropertyNewIcon = (props: PropertyNewIconProps) => {
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
        <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 8H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 17H17M7 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 13H17M7 13H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PropertyNewIcon;
