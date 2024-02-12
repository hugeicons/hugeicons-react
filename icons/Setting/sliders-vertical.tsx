import * as React from "react";
import type { SVGProps } from "react";

interface SlidersVerticalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SlidersVerticalIcon = (props: SlidersVerticalIconProps) => {
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
        <path d="M5.00025 20L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 11V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9998 8L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0002 20L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 12L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0002 20L19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SlidersVerticalIcon;
