import * as React from "react";
import type { SVGProps } from "react";

interface Bread03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bread03Icon = (props: Bread03IconProps) => {
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
        <path d="M15 11C15 8.23858 13.1011 6 10.7588 6C9.1261 6 7.5 7 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 11C19 8.79086 17.4818 7 15.609 7C15.0267 7 14.4787 7.1731 14 7.47806" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12C22 15.3137 17.5228 18 12 18C6.47715 18 2 15.3137 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.88973 11C8.5012 9.27477 7.13086 8 5.5 8C3.567 8 2 9.79086 2 12C2 13.6569 6.47715 15 12 15C17.5228 15 22 13.6569 22 12C22 11.0054 20.4499 9.02165 18.5314 9.00018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bread03Icon;
