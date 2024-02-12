import * as React from "react";
import type { SVGProps } from "react";

interface ArrowShrink01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowShrink01Icon = (props: ArrowShrink01IconProps) => {
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
        <path d="M6.50232 10.7365C7.34673 10.7485 10.1432 11.3294 10.7361 10.7365C11.329 10.1436 10.7481 7.34708 10.7361 6.50267M13.2685 17.5027C13.2565 16.6583 12.6756 13.8618 13.2685 13.2689C13.8614 12.676 16.6579 13.2569 17.5023 13.2689M20.9991 21.001L13.6103 13.6188M10.3691 10.3763L3 2.99902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowShrink01Icon;
