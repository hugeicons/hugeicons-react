import * as React from "react";
import type { SVGProps } from "react";

interface CursorEdit01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorEdit01Icon = (props: CursorEdit01IconProps) => {
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
        <path d="M16 3C16 2.5286 16 2.29289 15.8536 2.14645C15.7071 2 15.4714 2 15 2H14C13.5286 2 13.2929 2 13.1464 2.14645C13 2.29289 13 2.5286 13 3V4C13 4.4714 13 4.70711 13.1464 4.85355C13.2929 5 13.5286 5 14 5H15C15.4714 5 15.7071 5 15.8536 4.85355C16 4.70711 16 4.4714 16 4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 3C5 2.5286 5 2.29289 4.85355 2.14645C4.70711 2 4.4714 2 4 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H4C4.4714 5 4.70711 5 4.85355 4.85355C5 4.70711 5 4.4714 5 4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 14C5 13.5286 5 13.2929 4.85355 13.1464C4.70711 13 4.4714 13 4 13H3C2.5286 13 2.29289 13 2.14645 13.1464C2 13.2929 2 13.5286 2 14V15C2 15.4714 2 15.7071 2.14645 15.8536C2.29289 16 2.5286 16 3 16H4C4.4714 16 4.70711 16 4.85355 15.8536C5 15.7071 5 15.4714 5 15V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5399 20.6835C9.23361 20.8429 6.94858 10.0873 8.51764 8.51798C10.0867 6.94869 20.8431 9.23214 20.6837 11.5384C20.5739 13.0488 18.0175 13.6462 18.0921 14.9885C18.114 15.3817 18.6106 15.74 19.6038 16.4566C20.294 16.9546 20.9978 17.4382 21.6762 17.9521C21.947 18.1572 22.0538 18.5021 21.9744 18.8272C21.5925 20.3888 20.3957 21.5909 18.8277 21.9743C18.5026 22.0539 18.1577 21.9469 17.9527 21.6761C17.4389 20.9976 16.9553 20.2938 16.4574 19.6035C15.7409 18.6101 15.3826 18.1134 14.9895 18.0915C13.6474 18.0169 13.05 20.5737 11.5399 20.6835Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 13V5M13 3.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorEdit01Icon;
