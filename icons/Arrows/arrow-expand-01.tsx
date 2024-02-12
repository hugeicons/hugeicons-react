import * as React from "react";
import type { SVGProps } from "react";

interface ArrowExpand01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowExpand01Icon = (props: ArrowExpand01IconProps) => {
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
        <path d="M16.4998 3.26621C17.3442 3.25421 20.1407 2.67328 20.7336 3.26621C21.3265 3.85913 20.7456 6.65559 20.7336 7.5M20.5057 3.49097L13.502 10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.26621 16.5001C3.25421 17.3445 2.67328 20.141 3.26621 20.7339C3.85913 21.3268 6.65559 20.7459 7.5 20.7339M10.5019 13.4976L3.49809 20.5027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowExpand01Icon;
