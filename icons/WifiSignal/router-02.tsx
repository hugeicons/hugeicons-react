import * as React from "react";
import type { SVGProps } from "react";

interface Router02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Router02Icon = (props: Router02IconProps) => {
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
        <path d="M18 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14H18C19.8856 14 20.8284 14 21.4142 14.5858C22 15.1716 22 16.1144 22 18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.991 18H14M9.99551 18H10.0045M6 18H6.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.47776 10C2.54314 8.85117 2 7.47913 2 6.00543C2 4.52709 2.54657 3.15104 3.48661 2M6 3.82574C5.59087 4.48184 5.36068 5.22209 5.36068 6.00543C5.36068 6.78484 5.58856 7.52159 5.99385 8.17523" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.99609 5.99707H9.00245" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Router02Icon;
