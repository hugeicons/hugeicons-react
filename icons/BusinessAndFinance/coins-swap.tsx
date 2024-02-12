import * as React from "react";
import type { SVGProps } from "react";

interface CoinsSwapIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CoinsSwapIcon = (props: CoinsSwapIconProps) => {
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
        <path d="M10 7.0268C10.483 4.17323 12.9665 2 15.9575 2C19.2947 2 22 4.70532 22 8.0425C22 11.0335 19.8268 13.517 16.9732 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CoinsSwapIcon;
