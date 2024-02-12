import * as React from "react";
import type { SVGProps } from "react";

interface CongruentToIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CongruentToIcon = (props: CongruentToIconProps) => {
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
        <path d="M4 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 6.927C6.66667 3.9281 9.33333 4.80578 12 7C14.6667 9.19422 17.3333 10.0719 20 7.073" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CongruentToIcon;
