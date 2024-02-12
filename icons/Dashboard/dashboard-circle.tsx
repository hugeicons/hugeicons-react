import * as React from "react";
import type { SVGProps } from "react";

interface DashboardCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DashboardCircleIcon = (props: DashboardCircleIconProps) => {
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
        <circle cx="17.75" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default DashboardCircleIcon;
