import * as React from "react";
import type { SVGProps } from "react";

interface ArrowShrink02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowShrink02Icon = (props: ArrowShrink02IconProps) => {
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
        <path d="M6.5022 13.2635C7.34661 13.2515 10.1431 12.6706 10.736 13.2635C11.3289 13.8564 10.748 16.6529 10.736 17.4973M13.2684 6.49733C13.2564 7.34173 12.6755 10.1382 13.2684 10.7311C13.8613 11.324 16.6578 10.7431 17.5022 10.7311M20.999 2.99902L13.6101 10.3812M10.369 13.6237L2.99987 21.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowShrink02Icon;
