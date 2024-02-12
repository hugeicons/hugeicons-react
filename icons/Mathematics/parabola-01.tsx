import * as React from "react";
import type { SVGProps } from "react";

interface Parabola01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Parabola01Icon = (props: Parabola01IconProps) => {
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
        <path d="M21 3C21 11.2843 16.9706 18 12 18C7.02944 18 3 11.2843 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 21H4.05882M15.7059 21H16.7647M19.9412 21H21M7.23529 21H8.29412M11.4706 21H12.5294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Parabola01Icon;
