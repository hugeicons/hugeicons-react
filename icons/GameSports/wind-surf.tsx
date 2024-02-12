import * as React from "react";
import type { SVGProps } from "react";

interface WindSurfIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WindSurfIcon = (props: WindSurfIconProps) => {
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
        <path d="M8 21L7 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.0103 2C18.1781 7 16.2964 16.3438 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2024 3.91879C15.8029 3.54155 15.0108 3.01128 14.9346 3.00177C14.0744 2.89451 13.9624 3.41804 12.9636 4.88797C11.6984 6.5487 8.80852 10.0524 7.79639 10.911M7.79639 10.911C8.36954 12.6904 9.30761 15.5156 15.0924 16.9358M7.79639 10.911C9.07642 12.6395 13.9337 13.0313 16.2024 13.0111" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WindSurfIcon;
