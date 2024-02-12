import * as React from "react";
import type { SVGProps } from "react";

interface FencingMaskIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FencingMaskIcon = (props: FencingMaskIconProps) => {
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
        <path d="M11.9996 20C15.5002 20 20 14.2944 20 9.84106C20 4.64401 16.5709 1.98287 11.9996 2C7.42842 2.01713 4 4.64399 4 9.84104C4 14.2944 8.49907 20 11.9996 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 2L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 8C8 10 16 10 19.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4.5 13C8 15 16 15 19.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 16C6 18.4 5 20.8 3 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 16C18 18.4 19 20.8 21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FencingMaskIcon;
