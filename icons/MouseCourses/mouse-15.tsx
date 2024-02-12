import * as React from "react";
import type { SVGProps } from "react";

interface Mouse15IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse15Icon = (props: Mouse15IconProps) => {
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
        <path d="M6 2C6 3.80215 7.74439 3.5 9.00657 3.5C11.0476 3.5 11.9337 3.87677 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.2 22 18.5 18.392 18.5 14C18.5 9.60799 17.2 6 12 6C6.79994 6 5.5 9.60797 5.5 14C5.5 18.392 6.79994 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mouse15Icon;
