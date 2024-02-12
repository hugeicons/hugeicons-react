import * as React from "react";
import type { SVGProps } from "react";

interface HourglassIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HourglassIcon = (props: HourglassIconProps) => {
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
        <path d="M19 2V5C19 8.86599 15.866 12 12 12M5 2V5C5 8.86599 8.13401 12 12 12M12 12C15.866 12 19 15.134 19 19V22M12 12C8.13401 12 5 15.134 5 19V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 2H20M20 22H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default HourglassIcon;
