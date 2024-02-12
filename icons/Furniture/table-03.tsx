import * as React from "react";
import type { SVGProps } from "react";

interface Table03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Table03Icon = (props: Table03IconProps) => {
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
        <path d="M22 4L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 4V4.65609C3 5.62272 3.228 6.57118 3.65961 7.40006L4.20846 8.45408C5.18551 10.3304 5.26288 12.6519 4.41361 14.609L3.29319 17.191C3.10038 17.6353 3 18.1253 3 18.6221V20M21 4V4.65609C21 5.62272 20.772 6.57118 20.3404 7.40006L19.7915 8.45408C18.8145 10.3304 18.7371 12.6519 19.5864 14.609L20.7068 17.191C20.8996 17.6353 21 18.1253 21 18.6221V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 15H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7C13.7549 7.61287 13.2537 8 12.7056 8H11.2944C10.7463 8 10.2451 7.61287 10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Table03Icon;
