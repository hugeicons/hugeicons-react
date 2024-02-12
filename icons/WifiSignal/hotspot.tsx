import * as React from "react";
import type { SVGProps } from "react";

interface HotspotIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HotspotIcon = (props: HotspotIconProps) => {
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
        <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 20.001C2.74418 18.3295 2 16.2516 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 16.2516 21.2558 18.3295 20 20.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.52779 18C6.57771 16.9385 6 15.5367 6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14C18 15.5367 17.4223 16.9385 16.4722 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default HotspotIcon;
