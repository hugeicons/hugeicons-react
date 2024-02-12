import * as React from "react";
import type { SVGProps } from "react";

interface DashboardCircleAddIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DashboardCircleAddIcon = (props: DashboardCircleAddIconProps) => {
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
        <circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 2V10M22 6L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DashboardCircleAddIcon;
