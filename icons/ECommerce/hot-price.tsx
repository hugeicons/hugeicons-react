import * as React from "react";
import type { SVGProps } from "react";

interface HotPriceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HotPriceIcon = (props: HotPriceIconProps) => {
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
        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C11.6117 4.48692 11.2315 5.82158 10 8C8.79908 7.4449 8.5 7 8 5.75C6 8 4 11 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 17L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 13H10.009M13.991 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HotPriceIcon;
