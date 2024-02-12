import * as React from "react";
import type { SVGProps } from "react";

interface SlidersHorizontalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SlidersHorizontalIcon = (props: SlidersHorizontalIconProps) => {
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
        <path d="M4 5.00024L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 9L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 2L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 12L20 12.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 12.0002L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 19.0002L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SlidersHorizontalIcon;
