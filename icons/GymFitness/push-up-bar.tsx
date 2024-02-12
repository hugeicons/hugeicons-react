import * as React from "react";
import type { SVGProps } from "react";

interface PushUpBarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PushUpBarIcon = (props: PushUpBarIconProps) => {
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
        <path d="M3.5 10V8.5C3.5 6.61438 3.5 5.67157 4.08579 5.08579C4.67157 4.5 5.61438 4.5 7.5 4.5M20.5 10V8.5C20.5 6.61438 20.5 5.67157 19.9142 5.08579C19.3284 4.5 18.3856 4.5 16.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.36774 3.50788H14.6323C15.1691 3.50788 15.9008 3.41222 16.2766 3.88743C16.5 4.16989 16.5 4.58782 16.5 5.42367C16.5 5.94012 16.402 6.1124 15.913 6.31305L14.8339 6.75578C14.4233 6.92423 14.218 7.00846 14.004 6.99933C13.2715 6.96808 12.7454 6.19327 12 6.19327C11.2546 6.19327 10.7285 6.96808 9.996 6.99933C9.78196 7.00846 9.57667 6.92423 9.16611 6.75578L8.08704 6.31305C7.59799 6.1124 7.5 5.94012 7.5 5.42367C7.5 4.58782 7.5 4.16989 7.72338 3.88743C8.0992 3.41222 8.83092 3.50788 9.36774 3.50788Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.36774 14H14.6323C15.1691 14 15.9008 13.9043 16.2766 14.3795C16.5 14.662 16.5 15.0799 16.5 15.9158C16.5 16.4322 16.402 16.6045 15.913 16.8052L14.8339 17.2479C14.4233 17.4164 14.218 17.5006 14.004 17.4914C13.2715 17.4602 12.7454 16.6854 12 16.6854C11.2546 16.6854 10.7285 17.4602 9.996 17.4914C9.78196 17.5006 9.57667 17.4164 9.16611 17.2479L8.08704 16.8052C7.59799 16.6045 7.5 16.4322 7.5 15.9158C7.5 15.0799 7.5 14.662 7.72338 14.3795C8.0992 13.9043 8.83092 14 9.36774 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.41437 20.4142V18.9142C3.41437 17.0286 3.41437 16.0858 4.00015 15.5C4.58594 14.9142 5.52875 14.9142 7.41437 14.9142M20.4144 20.4142V18.9142C20.4144 17.0286 20.4144 16.0858 19.8286 15.5C19.2428 14.9142 18.3 14.9142 16.4144 14.9142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 20.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PushUpBarIcon;
