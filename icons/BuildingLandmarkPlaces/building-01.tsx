import * as React from "react";
import type { SVGProps } from "react";

interface Building01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Building01Icon = (props: Building01IconProps) => {
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
        <path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 9H14M18 13H14M18 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 22V3.2C6 2.42385 6.47098 2 7.2 2C8.87221 2 9.70832 2 10.4079 2.1108C14.2589 2.72075 17.2793 5.74106 17.8892 9.59209C18 10.2917 18 11.1278 18 12.8V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Building01Icon;
