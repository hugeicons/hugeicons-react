import * as React from "react";
import type { SVGProps } from "react";

interface ArrowRight05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowRight05Icon = (props: ArrowRight05IconProps) => {
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
        <path d="M20 6L20 18.0007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.503 12.0113V12.3819C11.4624 15.353 11.5973 16.3852 12.8479 15.906L13.1559 15.7241L13.4046 15.5513L13.9398 15.1383L14.9402 14.269L15.963 13.4052L16.463 12.9521L16.6857 12.7255L16.9479 12.3465L17.0017 12.0102L16.9479 11.6762L16.6857 11.2971L16.463 11.0706L15.963 10.6175L14.9402 9.75372L13.9398 8.88439L13.4046 8.4714L13.1559 8.29862L12.8479 8.1167C11.5973 7.63748 11.4624 8.66971 11.503 11.6408V12.0113ZM11.503 12.0113H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowRight05Icon;
