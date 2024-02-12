import * as React from "react";
import type { SVGProps } from "react";

interface DashboardCircleEditIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DashboardCircleEditIcon = (props: DashboardCircleEditIconProps) => {
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
        <path d="M6.25 10.5C8.59721 10.5 10.5 8.59721 10.5 6.25C10.5 3.90279 8.59721 2 6.25 2C3.90279 2 2 3.90279 2 6.25C2 8.59721 3.90279 10.5 6.25 10.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.75 22C20.0972 22 22 20.0972 22 17.75C22 15.4028 20.0972 13.5 17.75 13.5C15.4028 13.5 13.5 15.4028 13.5 17.75C13.5 20.0972 15.4028 22 17.75 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.25 22C8.59721 22 10.5 20.0972 10.5 17.75C10.5 15.4028 8.59721 13.5 6.25 13.5C3.90279 13.5 2 15.4028 2 17.75C2 20.0972 3.90279 22 6.25 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.8679 2.43885L21.5602 3.13122C22.146 3.717 22.146 4.66675 21.5602 5.25254L17.9328 8.9482C17.6475 9.23355 17.2825 9.42591 16.8858 9.5L14.6376 9.98804C14.2827 10.0651 13.9666 9.74993 14.0427 9.39476L14.5212 7.15944C14.5953 6.76275 14.7876 6.39775 15.073 6.1124L18.7465 2.43885C19.3323 1.85306 20.2821 1.85307 20.8679 2.43885Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DashboardCircleEditIcon;
